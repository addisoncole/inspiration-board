import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      error: [],
    };
  }

componentDidMount(){
  axios.get('https://inspiration-board.herokuapp.com/boards/zAddy/cards')
  .then((response) => {
    console.log(response.data)
    this.setState({ cards: response.data });
  })
  .catch((error) => {
    this.setState({ error: error.message });
  });
}


  render() {
    const cardData = this.state.cards
    const cardCollection = cardData.map((card) => {
      console.log(card.card)
      const newCard = card.card;
      return ( <Card key={newCard.id} text={newCard.text} emoji={newCard.emoji}/>   )
    });

    return (
      <div>
        {cardCollection}
      </div>
    )
  }

}

// Board.propTypes = {
//
// };

export default Board;
