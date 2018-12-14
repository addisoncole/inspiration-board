import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {
    const text = this.props.text;
    let moji = this.props.emoji;
    console.log(moji);
    if (moji !== undefined && moji !== null) {
        moji = emoji.getUnicode(moji);
    }

    return (
      <div className="card">
        <span className="card__content">
          <div className="card__content-text">{text}</div>
          <div className="card__content-emoji">{moji}</div>
        </span>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
