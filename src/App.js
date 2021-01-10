import React, { useReducer, useMemo } from 'react';
import AppsList from './AppsList';
import CategoriesSidebar from './CategoriesSidebar';
import AppsService from './AppsService';
import AppSearchBy from './AppsList/AppSearchBy';

const initialState = {
  apps: [],
  loading: true,
  filter: '',
  searchBy: '',
  selectedPage: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case 'setApps':
      return {
        ...state,
        loading: false,
        apps: action.value,
      };
    case 'filterAppsByCategory':
      return {
        ...state,
        filter: action.value,
      };
    case 'searchApps':
      return {
        ...state,
        searchBy: action.value.toLowerCase(),
      };
    case 'selectPage':
      return {
        ...state,
        selectedPage: action.value,
      }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { apps, loading, filter, searchBy, selectedPage } = state;

  React.useEffect(() => {
    const getApps = async () => {
      const response = await AppsService.loadApps();
      dispatch({
        type: 'setApps',
        value: response,
      })
    }
    getApps();
  }, []);

  const filterByCategory = (category) => dispatch({
    type: 'filterAppsByCategory',
    value: category,
  });

  const search = (keyword) => dispatch({
    type: 'searchApps',
    value: keyword,
  })

  const selectPage = (page) => dispatch({
    type: 'selectPage',
    value: page,
  })

  const filteredApps = useMemo(() => {
    const filteredAppsByCategory = filter
      ? apps.filter(({ categories }) => categories.includes(filter))
      : apps;
    const filteredBySearchApps = searchBy
      ? filteredAppsByCategory.filter(
        ({ name, description }) => (
          name.toLowerCase().includes(searchBy) || description.toLowerCase().includes(searchBy)
        ))
      : filteredAppsByCategory;
    selectPage(1);
    return filteredBySearchApps;
  }, [filter, searchBy, apps]);

  return (
    <div className="flex-container">
      <CategoriesSidebar onClickHandler={filterByCategory} selectedCategory={filter} />
      <section className="apps-list">
        <AppSearchBy onChangeHandler={search} />
        <AppsList
          apps={filteredApps}
          loading={loading}
          page={selectedPage}
          setPage={selectPage}
        />
      </section>
    </div>
  );
}


export default App;
