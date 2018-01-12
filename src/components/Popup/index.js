import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

import './popup.css';

const HeaderTitle = () => {
  return (
    <span>How likely are you to recommend <b>Hundred5</b> to a friend or colleague?</span>
  )
};

class Popup extends Component {
  render () {
    return (
      <div className="c-popup">
        <Header title={HeaderTitle()}/>
        <Body />
      </div>
    )
  }
}

export default Popup;
