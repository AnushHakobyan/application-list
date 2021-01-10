import React, { useState } from 'react';
import PropTypes from 'prop-types';

const debounce = (callback, wait) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), wait);
  }
}

const AppSearchBy = ({ onChangeHandler }) => {
  const [value, setValue] = useState('');
  const handleChange = ({ target: { value } }) => {
    setValue(value);
    const debouncedChange = debounce((value) => {
      onChangeHandler(value);
    }, 200);
    debouncedChange(value);
  }
  return (
    <header>
      <input
        type="text"
        placeholder="Search by App"
        onChange={handleChange}
        value={value}
      />
    </header>
  )
}

AppSearchBy.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
};

export default AppSearchBy;