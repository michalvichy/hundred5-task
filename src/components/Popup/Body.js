import React from 'react';
import Star from './../Star';

const Body = props => {
  const ranking = new Array(11);

  for (let i = 0, length = ranking.length; i < length; i++) {
    ranking[i] = i;
  }

  // TODO: change for function passed as prop from component above
  const submitValue = value => {
    console.log(value);
  };

  return (
    <div className="c-popup__body">
      {ranking.reverse().map(value => <Star key={value} value={value} onSubmit={submitValue} />)}
    </div>
  )
};

export default Body;
