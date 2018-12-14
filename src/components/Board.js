import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);
    const {url, boardName} = this.props;
    this.state = {
      cards: [],
      error: [],
      baseUrl: url,
      boardName: boardName,
      deleteCardUrl: "https://inspiration-board.herokuapp.com/cards/"
    };
  }

  componentDidMount(){
    this.getCards();
  }

  getCards(){
    axios.get(this.state.baseUrl + this.state.boardName + "/cards")
    .then((response) => {
      this.setState({ cards: response.data });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  deleteCardCallback = (cardID) => {
    axios.delete(this.state.deleteCardUrl + cardID)
    .then((response) => {
      console.log(`deleted ${response.data}`)
      this.getCards();
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  render() {
    const cardData = this.state.cards
    const cardCollection = cardData.map((card) => {
      const newCard = card.card;
      return ( <Card key={newCard.id} id={newCard.id} text={newCard.text} emoji={newCard.emoji} deleteCardCallback={this.deleteCardCallback}/>   )
    });

    return (
      <div className="board">
        {cardCollection}
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
