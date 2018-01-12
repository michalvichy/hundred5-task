import React from 'react';
import PropTypes from 'prop-types';
import CloseBtn from './CloseBtn';

const Header = props => {
  const { title } = props;

  return (
    <div className="c-popup__header">
      <CloseBtn onClose={() => {}}/>
      {title}
    </div>
  )
};

Header.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
};

export default Header;
