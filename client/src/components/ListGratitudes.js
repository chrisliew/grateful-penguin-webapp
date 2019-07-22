import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import * as actions from "../actions";

class ListGratitudes extends Component {
  state = {
    randomColors: [
      "#FFD5C2",
      "#FED766",
      "#BBD1EA",
      "#E7E5DF",
      "#AEF6C7",
      "#AC92A6",
      "#C9D6EA",
      "#F1C8DB",
      "#D7F171",
      "#F4B266",
      "#C17767"
    ]
  };

  getRandomColor = () => {
    const item = this.state.randomColors[
      Math.floor(Math.random() * this.state.randomColors.length)
    ];
    return item;
  };

  render() {
    const { gratitudes } = this.props.auth;

    const listGratitudes =
      this.props.auth && gratitudes
        ? gratitudes
            .map((gratitude, index) => (
              //if the date is the same as the last date, group together
              <div
                className='gratitudes'
                style={{ backgroundColor: this.getRandomColor() }}
                key={gratitude._id}
              >
                <h4 className='gratitudes__date'>
                  {moment(gratitude.date).format("MMMM Do YYYY")}
                  {gratitude.mood === 1 ? (
                    <img
                      className='gratitudes__smiley-face'
                      src='/images/unhappy.png'
                      alt='unhappy'
                    />
                  ) : null}
                  {gratitude.mood === 2 ? (
                    <img
                      className='gratitudes__smiley-face'
                      src='/images/sad.png'
                      alt='sad'
                    />
                  ) : null}
                  {gratitude.mood === 3 ? (
                    <img
                      className='gratitudes__smiley-face'
                      src='/images/confused.png'
                      alt='confused'
                    />
                  ) : null}
                  {gratitude.mood === 4 ? (
                    <img
                      className='gratitudes__smiley-face'
                      src='/images/smiling.png'
                      alt='smiling'
                    />
                  ) : null}
                  {gratitude.mood === 5 ? (
                    <img
                      className='gratitudes__smiley-face'
                      src='/images/happy.png'
                      alt='happy'
                    />
                  ) : null}
                </h4>
                <div>{gratitude.gratitude}</div>
              </div>
            ))
            .reverse()
        : null;

    return (
      <div className='list-gratitudes'>
        <h3 className='list-gratitudes__title'>Your List Of Gratitudes</h3>
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
