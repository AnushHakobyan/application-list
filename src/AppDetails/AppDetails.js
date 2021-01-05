import React from 'react';
import AppDetailsContent from './AppDetailsContent';
import AppDetailsFooter from './AppDetailsFooter';

const AppDetails = () => {
  return (
    <div className="app-item">
      <div className="box-info">
        <AppDetailsContent />
        <AppDetailsFooter />
      </div>
    </div>
  );
}

export default AppDetails;