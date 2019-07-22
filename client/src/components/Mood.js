import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Mood extends Component {
  state = {
    mood1: "",
    mood2: "",
    mood3: "",
    mood4: "",
    mood5: ""
  };
  handleOnClick = event => {
    this.setState({ mood1: "", mood2: "", mood3: "", mood4: "", mood5: "" });
    switch (event.target.alt) {
      case "unhappy":
        this.setState({ mood1: "selected" });
        return this.props.addMood(1);
      case "sad":
        this.setState({ mood2: "selected" });
        return this.props.addMood(2);
      case "confused":
        this.setState({ mood3: "selected" });
        return this.props.addMood(3);
      case "smiling":
        this.setState({ mood4: "selected" });
        return this.props.addMood(4);
      case "happy":
        this.setState({ mood5: "selected" });
        return this.props.addMood(5);
      default:
        return null;
    }
  };
  render() {
    return (
      <div className='mood'>
        {/* <h3>How's Your Mood?</h3> */}
        <img
          className={
            this.state.mood1 === "selected"
              ? "mood__smiley-face-selected"
              : "mood__smiley-face"
          }
          src='/images/unhappy.png'
          alt='unhappy'
          onClick={this.handleOnClick}
        />
        <img
          className={
            this.state.mood2 === "selected"
              ? "mood__smiley-face-selected"
              : "mood__smiley-face"
          }
          src='/images/sad.png'
          alt='sad'
          onClick={this.handleOnClick}
        />
        <img
          className={
            this.state.mood3 === "selected"
              ? "mood__smiley-face-selected"
              : "mood__smiley-face"
          }
          src='/images/confused.png'
          alt='confused'
          onClick={this.handleOnClick}
        />
        <img
          className={
            this.state.mood4 === "selected"
              ? "mood__smiley-face-selected"
              : "mood__smiley-face"
          }
          src='/images/smiling.png'
          alt='smiling'
          onClick={this.handleOnClick}
        />
        <img
          className={
            this.state.mood5 === "selected"
              ? "mood__smiley-face-selected"
              : "mood__smiley-face"
          }
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
