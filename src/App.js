import React, { useEffect, useReducer, useMemo, useState } from 'react';
import AppsList from './AppsList';
import CategoriesSidebar from './CategoriesSidebar';
import AppsService from './AppsList/AppsService';
import AppSearchBy from './AppsList/AppSearchBy';
import './App.css';

const initialState = {
  apps: [],
  loading: true,
  filter: '',
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
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedPage, setSelectedPage] = useState(1);
  const { apps, loading, filter, searchBy } = state;

  useEffect(() => {
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

  const filteredApps = useMemo(() => {
    const filteredAppsByCategory = filter ? apps.filter(({ categories }) => categories.includes(filter)) : apps;
    const filteredBySearchApps = searchBy ? filteredAppsByCategory.filter(
      ({ name, description }) => name.toLowerCase().includes(searchBy) || description.toLowerCase().includes(searchBy)
    ) : filteredAppsByCategory;
    setSelectedPage(1);
    return filteredBySearchApps;
  }, [filter, searchBy, apps]);

  return (
    <div className="flex-container">
      <CategoriesSidebar onClickHandler={filterByCategory} />
      <section className="apps-list">
        <AppSearchBy onChangeHandler={search} />
        <AppsList apps={filteredApps} loading={loading} page={selectedPage} setPage={setSelectedPage} />
      </section>
    </div>
  );
}


export default App;
