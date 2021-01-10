/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const createPages = (pagesCount) => [...Array(pagesCount).keys()].map(page => page + 1);

const AppsListPagination = ({ selectedPage, selectPage, pagesCount }) => {
  const pages = useMemo(() => createPages(pagesCount), [pagesCount]);

  const onPageClickHandler = (e) => {
    const page = Number(e.currentTarget.textContent);
    if (page !== selectedPage) {
      selectPage(page);
    }
  };

  const onPrevClickHandler = () => {
    if (selectedPage > 1) {
      selectPage(selectedPage - 1);
    }
  };

  const onNextClickHandler = () => {
    if (selectedPage < pagesCount) {
      selectPage(selectedPage + 1);
    }
  };

  return (
    <ul className="pagination">
      <li onClick={onPrevClickHandler}><a href="#">&lt;</a></li>
      {pages.map(page => (
        <li
          key={page}
          onClick={onPageClickHandler}
          className={page === selectedPage ? 'active' : ''}
        >
          <a href="#">{page}</a>
        </li>
      ))}
      <li onClick={onNextClickHandler}><a href="#">&gt;</a></li>
    </ul>
  )
};

AppsListPagination.propTypes = {
  selectedPage: PropTypes.number.isRequired,
  selectPage: PropTypes.func.isRequired,
  pagesCount: PropTypes.number.isRequired,
};

export default AppsListPagination;
