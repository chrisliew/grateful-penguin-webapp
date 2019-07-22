import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
// import AnimatedPenguin from "./AnimatedPenguin";
import ListGratitudes from "./ListGratitudes";
import Mood from "./Mood";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gratitudes: [],
      addGratitude: ""
    };
  }

  componentDidMount() {
    // this.props.fetchGratitudes();
  }

  handleOnChange = event => {
    this.setState({ addGratitude: event.target.value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const gratitude = {
      gratitude: this.state.addGratitude,
      userId: this.props.auth._id,
      mood: this.props.mood ? this.props.mood : 0
    };
    this.props
      .addGratitude(gratitude)
      .then(res => this.props.fetchUser().then(this.props.addMood(0)));
    this.setState({ addGratitude: "" });
  };

  onEnterPress = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      const gratitude = {
        gratitude: this.state.addGratitude,
        userId: this.props.auth._id,
        mood: this.props.mood ? this.props.mood : 0
      };
      this.props
        .addGratitude(gratitude)
        .then(res => this.props.fetchUser().then(this.props.addMood(0)));
      this.setState({ addGratitude: "" });
    }
  };

  render() {
    return (
      <div className='home'>
        {/* <AnimatedPenguin /> */}
        <div className='add_gratitude'>
          <h3 className='add_gratitude__header'>Add Gratitude And Mood Here</h3>
          <Mood />
          <form className='home__form' onSubmit={this.handleOnSubmit}>
            <textarea
              onKeyDown={this.onEnterPress}
              className='add_gratitude__textarea'
              onChange={this.handleOnChange}
              type='text'
              value={this.state.addGratitude}
              placeholder='I am grateful for...'
            />
            <button className='home__form__button' type='submit'>
              Submit
            </button>
          </form>
        </div>
        <ListGratitudes />
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
)(Home);
