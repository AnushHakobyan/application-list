import React from 'react';
import PropTypes from 'prop-types';
import AppDescription from './AppDescription';
import AppTags from './AppTags';

const AppDetailsContent = ({ name, description, categories }) => {
  return (
    <div className="box-info--content">
      <AppDescription name={name} description={description} />
      <AppTags tags={categories} />
    </div>
  )
};

AppDetailsContent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AppDetailsContent;