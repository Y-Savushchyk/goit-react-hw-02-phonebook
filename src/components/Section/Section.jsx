import React from 'react';
import PropTypes from 'prop-types';
import './Section.css'

import Header from 'components/Header/Header';

const Section = ({ title, children }) => {
  return (
    <section className='section'>
      <Header title={title} />
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};