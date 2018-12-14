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
        {text} {moji}
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
