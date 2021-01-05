import React from 'react';
import AppDescription from './AppDescription';
import AppTags from './AppTags';

const AppDetailsContent = () => {
  return (
    <div className="box-info--content">
      <AppDescription />
      <AppTags />
    </div>
  )
};

export default AppDetailsContent;