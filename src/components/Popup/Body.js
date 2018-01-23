import React from 'react';
import PropTypes from 'prop-types';
import Star from './../Star';

const Body = props => {
  const { onStarClick, maxRating } = props;
  const ranking = new Array(maxRating);

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
  maxRating: PropTypes.number,
};

Body.defaultProps = {
  maxRating: 11,
};

export default Body;
