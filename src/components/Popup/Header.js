import React from 'react';
import PropTypes from 'prop-types';
import CloseBtn from './CloseBtn';

const Header = props => {
  const { title, onClose } = props;

  return (
    <div className="c-popup__header">
      <CloseBtn onClose={onClose}/>
      {title}
    </div>
  )
};

Header.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Header;
