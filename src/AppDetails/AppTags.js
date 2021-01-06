import React from 'react';
import PropTypes from 'prop-types';

const AppTags = ({ tags }) => (
  <div className="tags">
    {tags.map(tag => (
      <><span>{tag}</span> /</>
    ))}
  </div>
);

AppTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default AppTags;
