import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
// import AnimatedPenguin from "./AnimatedPenguin";
import ListGratitudes from "./ListGratitudes";

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
      userId: this.props.auth._id
    };
    this.props.addGratitude(gratitude).then(res => this.props.fetchUser());
    this.setState({ addGratitude: "" });
  };

  render() {
    return (
      <div className='home'>
        {/* <AnimatedPenguin /> */}
        <div className='add_gratitude'>
          <h3 className='add_gratitude__header'>Add Gratitude Here</h3>
          <form onSubmit={this.handleOnSubmit}>
            <input
              className='add_gratitude__textarea'
              onChange={this.handleOnChange}
              type='text'
              value={this.state.addGratitude}
              placeholder='Enter stuff here'
            />
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
