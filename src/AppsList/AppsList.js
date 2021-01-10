import React from 'react';
import PropTypes from 'prop-types';
import { APPS_PER_PAGE } from '../utils/constants';
import { appShape } from '../utils/typeShapes';
import { List, ListItem } from '../List';
import Loading from '../Loader';
import AppDetails from '../AppDetails';
import AppsListPagination from './AppsListPagination';

const AppsList = ({
  apps, loading, page, setPage,
}) => {
  const startIndex = (page - 1) * APPS_PER_PAGE;
  const appsPerPage = apps.slice(startIndex, startIndex + APPS_PER_PAGE);
  return (
    loading
      ? <Loading />
      : (
        <>
          <List>
            {appsPerPage.map((app) => (
              <ListItem key={app.id}>
                <AppDetails {...app} />
              </ListItem>
            ))}
          </List>
          <AppsListPagination
            selectedPage={page}
            selectPage={setPage}
            pagesCount={Math.ceil(apps.length / APPS_PER_PAGE)} />
        </>
    )
  );
}

AppsList.propTypes = {
  apps: PropTypes.arrayOf(appShape),
  loading: PropTypes.bool.isRequired,
};

export default AppsList;
