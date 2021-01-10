import React from 'react';
import { appTypeObject } from '../utils/typeShapes';
import AppDetailsContent from './AppDetailsContent';
import AppDetailsFooter from './AppDetailsFooter';

const AppDetails = ({
  name, description, categories, subscriptions,
}) => (
  <>
    <AppDetailsContent name={name} description={description} categories={categories} />
    <AppDetailsFooter subscriptions={subscriptions} />
  </>
);

AppDetails.propTypes = appTypeObject;

export default AppDetails;