import React from 'react';
import PropTypes from 'prop-types';

const AppDescription = ({ name, description }) => (
  <div className="description">
    <h1>{name}</h1>
    <p>{description}</p>
  </div>
);

AppDescription.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default AppDescription;