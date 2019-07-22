import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Mood extends Component {
  handleOnClick = event => {
    switch (event.target.alt) {
      case "unhappy":
        return this.props.addMood(1);
      case "sad":
        return this.props.addMood(2);
      case "confused":
        return this.props.addMood(3);
      case "smiling":
        return this.props.addMood(4);
      case "happy":
        return this.props.addMood(5);
      default:
        return null;
    }
  };
  render() {
    return (
      <div className='mood'>
        <h3>How's Your Mood?</h3>
        <img
          className='mood__smiley-face'
          src='/images/unhappy.png'
          alt='unhappy'
          onClick={this.handleOnClick}
        />
        <img
          className='mood__smiley-face'
          src='/images/sad.png'
          alt='sad'
          onClick={this.handleOnClick}
        />
        <img
          className='mood__smiley-face'
          src='/images/confused.png'
          alt='confused'
          onClick={this.handleOnClick}
        />
        <img
          className='mood__smiley-face'
          src='/images/smiling.png'
          alt='smiling'
          onClick={this.handleOnClick}
        />
        <img
          className='mood__smiley-face'
          src='/images/happy.png'
          alt='happy'
          onClick={this.handleOnClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actions
)(Mood);
