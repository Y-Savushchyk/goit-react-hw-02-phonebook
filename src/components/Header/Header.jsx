import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'

const Header = ({ title }) => {
  return <p className='title'>{title}</p>;
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
