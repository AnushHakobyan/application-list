import React from 'react';
import AppDetailsContent from './AppDetailsContent';
import AppDetailsFooter from './AppDetailsFooter';

const AppDetails = (props) => {
  const { name, description, categories, subscriptions } = props;
  return (
    <div className="app-item">
      <div className="box-info">
        <AppDetailsContent name={name} description={description} categories={categories} />
        <AppDetailsFooter subscriptions={subscriptions} />
      </div>
    </div>
  );
}

export default AppDetails;