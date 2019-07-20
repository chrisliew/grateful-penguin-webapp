import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import * as actions from "../actions";

class ListGratitudes extends Component {
  render() {
    const { gratitudes } = this.props.auth;

    const listGratitudes = this.props.auth
      ? gratitudes
          .map(gratitude => (
            <div className='gratitudes' key={gratitude._id}>
              <h4 className='gratitudes__date'>
                {moment(gratitude.date).format("MMMM Do YYYY")}
              </h4>
              <div>{gratitude.gratitude}</div>
            </div>
          ))
          .reverse()
      : null;

    return (
      <div>
        <h3>Your List Of Gratitudes</h3>
        {listGratitudes}
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
)(ListGratitudes);
