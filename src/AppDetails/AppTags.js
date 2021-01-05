import React from 'react';

const tags = [
  'Voice Analytics',
  'Reporting',
  'Optimization',
];

const AppTags = ({ /* tags */ }) => (
  <div className="tags">
    {tags.map(tag => (
      <><span>{tag}</span> /</>
    ))}
  </div>
);

export default AppTags;
