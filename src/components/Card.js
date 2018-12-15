import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  deleteOnClick = () => {
    this.props.deleteCardCallback(this.props.id);
  }

  render() {
    const text = this.props.text;
    let moji = this.props.emoji;
    if (moji !== undefined && moji !== null) {
        moji = emoji.getUnicode(moji);
    }

    return (
      <div className="card">
        <span className="card__content">
          <div className="card__content-text">{text}</div>
          <div className="card__content-emoji">{moji}</div>
        </span>
        <button className="card__delete" onClick={this.deleteOnClick}> X </button>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func,
};

export default Card;
