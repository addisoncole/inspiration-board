import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: "",
      emoji: "",
    };
  }

  onTextChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  handleChange = (event) => {
    this.setState({
      emoji: event.target.value,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.emoji === "" && this.state.text === "") {
      console.log("invalid message")
    } else {
      const newInspo = {
        text: this.state.text,
        emoji: this.state.emoji
      }
      this.setState({
        text: "",
        emoji: "",
      });
      event.target.reset();
      this.props.submissionFormCallback(newInspo);
    }
  }

  render() {

    const options = emoji.names.map((moji, i) => {
      return <option key={i} value={moji}>{emoji.getUnicode(moji)}</option>;
      });

      return (
        <div className="new-card-form" >
          <form className="new-card-form__form" onSubmit={this.onFormSubmit}>
            <label htmlFor="text" className="new-card-form__form-label">Message: </label>
            <input text="text" type="text"
              placeholder="Message" className="new-card-form__form-textarea" onChange={this.onTextChange}/>
            <label htmlFor="emoji" className="new-card-form__form-label">Emoji: </label>
            <select onChange={this.handleChange} className="new-card-form__form-select" name="emoji">
              <option value=""></option>
              {options}
            </select>
            <input type="submit" value="Submit" className="new-card-form__form-button"/>
          </form>
        </div>
      );
    }
  }

  NewCardForm.propTypes = {
    submissionFormCallback: PropTypes.func,
  };

  export default NewCardForm;
