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
    <button className="c-close" onClick={btnOnClick} aria-label={'Close'} />
  )
};

CloseBtn.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CloseBtn;
