import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Body from './Body';
import { closePopup, setRating } from '../../actions/index';

import './popup.css';

const HeaderTitle = () => {
  return (
    <span>How likely are you to recommend <b>Hundred5</b> to a friend or colleague?</span>
  )
};

class Popup extends Component {
  render () {
    const { dispatch } = this.props;

    return (
      <div className="c-popup">
        <Header title={HeaderTitle()} onClose={() => dispatch(closePopup())} />
        <Body onStarClick={(value) => dispatch(setRating(value))} />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    rating: store.rating,
    closed: store.closed
  };
};

export default connect(mapStateToProps)(Popup);
