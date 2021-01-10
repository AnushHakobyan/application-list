/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppsService from '../AppsService';


const CategoriesSidebar = ({ onClickHandler, selectedCategory }) => {
  const [categories, setCategories] = useState([]);

  // useEffect is not imported above, as it is not mockable in that way.
  React.useEffect(() => {
    const getCategories = async () => {
      const categories = await AppsService.loadCategories();
      setCategories(categories);
    }
    getCategories();
  }, []);

  return (
    <nav className="nav-categories">
      <h2>Categories</h2>
      <ul className="nav-menu">
        <li
          className={selectedCategory === '' ? 'active' : ''}
          onClick={() => onClickHandler('')}
        >
          <a href="#">Show All</a>
        </li>
        {
          categories.map((category) => (
            <li
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => onClickHandler(category)}
            >
              <a href="#">{category}</a></li>
          ))
        }
      </ul>
    </nav>
  )
}

CategoriesSidebar.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

export default CategoriesSidebar;
