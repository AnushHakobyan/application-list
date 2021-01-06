import React from 'react';
import AppDetailsContent from './AppDetailsContent';
import AppDetailsFooter from './AppDetailsFooter';

const i = {
  "id": "9b565b11-7311-5b5e-a699-97873dffb361",
  "name": "Voice Report",
  "description": "Calls reporting and analytics of your calls.",
  "categories": ["Voice Analytics", "Reporting", "Optimization"],
  "subscriptions": [
    {
      "name": "Trial",
      "price": 0
    },
    {
      "name": "Professional",
      "price": 3500
    }
  ]
};

const AppDetails = () => {
  const { name, description, categories, subscriptions } = i;
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