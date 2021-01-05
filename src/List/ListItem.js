import React from 'react';
import AppDetails from '../AppDetails/AppDetails';

const ListItem = () => {
  return (
    <li>
      <div className="app-item">
        <div className="box-info">
          <AppDetails />
        </div>
      </div>
    </li>
  );
};

export default ListItem;