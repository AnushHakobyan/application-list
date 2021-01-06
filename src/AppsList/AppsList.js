import React, { useState, useEffect } from 'react';
import { List, ListItem } from '../List';
import AppDetails from '../AppDetails';
import AppsService from './AppsService';

const AppsList = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApps = async () => {
      const response = await AppsService.getApps();
      setApps(response);
      setLoading(false);
    }
    getApps();
  }, []);

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
