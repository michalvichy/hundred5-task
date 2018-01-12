import React from 'react';
import PropTypes from 'prop-types';
import './star.css';

const Star = props => {
  const { value, onSubmit } = props;

  return (
    <div className="c-star" onClick={(event) => onSubmit(value)} aria-label={`Rate ${value}`}>
      <i className="c-star__icon" />
      <span className="c-star__value">{value}</span>
    </div>
  )
};

Star.propTypes = {
  value: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Star
