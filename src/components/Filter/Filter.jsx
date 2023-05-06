import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ value, onChange }) => (
  <label className="filter">
    Find contacts by name
    <input
      className="input"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};