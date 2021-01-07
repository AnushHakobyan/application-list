import React from 'react';
import { appTypeObject } from '../utils/typeShapes';
import AppDetailsContent from './AppDetailsContent';
import AppDetailsFooter from './AppDetailsFooter';

const AppDetails = ({
  name, description, categories, subscriptions,
}) => (
  <div className="app-item">
    <div className="box-info">
      <AppDetailsContent name={name} description={description} categories={categories} />
      <AppDetailsFooter subscriptions={subscriptions} />
    </div>
  </div>
);

AppDetails.propTypes = appTypeObject;

export default AppDetails;