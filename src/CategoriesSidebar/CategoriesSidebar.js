import React, { useState, useEffect } from 'react';
import AppsService from '../AppsList/AppsService';


const CategoriesSidebar = ({ onClickHandler }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
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
        <li onClick={() => onClickHandler('')}><a href="#">Show All</a></li>
        {
          categories.map((category) => (
            <li key={category} /*className="active"*/ onClick={() => onClickHandler(category)}>
              <a href="#">{category}</a></li>
          ))
        }
      </ul>
    </nav>
  )
}

export default CategoriesSidebar;
