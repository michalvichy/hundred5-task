import React from 'react';
import PropTypes from 'prop-types';
import Star from './../Star';

const Body = props => {
  const ranking = new Array(11);
  const { onStarClick } = props;

  for (let i = 0, length = ranking.length; i < length; i++) {
    ranking[i] = i;
  }

  return (
    <div className="c-popup__body">
      {ranking.reverse().map(value => <Star key={value} value={value} onSubmit={onStarClick} />)}
    </div>
  )
};

Body.propTypes = {
  onStarClick: PropTypes.func.isRequired,
};

export default Body;
