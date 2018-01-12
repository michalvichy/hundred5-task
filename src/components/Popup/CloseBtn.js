import React from 'react';
import PropTypes from 'prop-types';

const CloseBtn = props => {
  const { onClose } = props;

  const btnOnClick = (event) => {
    event.preventDefault();
    console.log('popup closed');

    onClose();
  };

  return (
    <div className="c-close" onClick={btnOnClick} />
  )
};

CloseBtn.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CloseBtn;
