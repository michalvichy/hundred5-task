import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Body from './Body';
import { closePopup, popupTouched, setRating } from '../../actions/index';

import './popup.css';

const HeaderTitle = () => {
  return (
    <span>How likely are you to recommend <b>Hundred5</b> to a friend or colleague?</span>
  )
};

class Popup extends Component {
  componentWillMount() {
    this.props.dispatch(popupTouched());
  }

  render () {
    const { dispatch, touched, maxRating } = this.props;

    return (
      <div>
        {!touched && (
          <div className="c-popup" aria-label={'Rating popup'}>
            <Header title={HeaderTitle()} onClose={() => dispatch(closePopup())} />
            <Body onStarClick={(value) => dispatch(setRating(value))} maxRating={maxRating}/>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    touched: store.touched,
    maxRating: store.maxRating,
  };
};

export default connect(mapStateToProps)(Popup);
