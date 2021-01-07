import React from 'react';

const AppDetailsFooter = ({ subscriptions }) => (
  <div className="box-info--footer">
    <ul>
      {subscriptions.map(({ name, price }) => (
        <li key={name}>
          <span>{name}</span>
          {' '}
          <h3>{price  || 'free'}<sup>{price ? '€' : ''}</sup></h3>
        </li>
      ))}
    </ul>
  </div>
);

export default AppDetailsFooter;