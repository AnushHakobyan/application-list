import React from 'react';
import PropTypes from 'prop-types';
import { subscriptionShape } from '../utils/typeShapes';

const AppDetailsFooter = ({ subscriptions }) => (
  <div className="box-info--footer">
    <ul>
      {subscriptions.map(({ name, price }) => (
        <li key={name} data-testid={name}>
          <span>{name}</span>
          {' '}
          <h3>{price  || 'free'}<sup>{price ? '€' : ''}</sup></h3>
        </li>
      ))}
    </ul>
  </div>
);

AppDetailsFooter.propTypes = {
  subscriptions: PropTypes.arrayOf(subscriptionShape),
};

export default AppDetailsFooter;