import React from 'react';

const ListItem = ({ children }) => {
  return (
    <li>
      <div className="app-item">
        <div className="box-info">
          {children}
        </div>
      </div>
    </li>
  );
};

export default ListItem;