import React from 'react';
import { List, ListItem } from '../List';
import AppDetails from '../AppDetails';


const AppsList = ({ apps, loading }) => {
  return (
    loading
      ? <span>Loading...</span>
      : (
        <List>
          {apps.map(({ id, ...app }) => (
            <ListItem key={id}>
              <AppDetails {...app} />
            </ListItem>
          ))}
        </List>
    )
  )
}

export default AppsList;
