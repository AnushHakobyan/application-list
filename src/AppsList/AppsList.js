import React, { useState } from 'react';
import { List, ListItem } from '../List';
import AppDetails from '../AppDetails';
import AppsListPagination from './AppsListPagination';

const APPS_PER_PAGE = 3;

const AppsList = ({ apps, loading }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const startIndex = (selectedPage - 1) * APPS_PER_PAGE;
  const appsPerPage = apps.slice(startIndex, startIndex + APPS_PER_PAGE);
  return (
    loading
      ? <span>Loading...</span>
      : (
        <>
          <List>
            {appsPerPage.map(({ id, ...app }) => (
              <ListItem key={id}>
                <AppDetails {...app} />
              </ListItem>
            ))}
          </List>
          <AppsListPagination
            selectedPage={selectedPage}
            selectPage={setSelectedPage}
            pagesCount={Math.ceil(apps.length/APPS_PER_PAGE)} />
        </>
    )
  )
}

export default AppsList;
