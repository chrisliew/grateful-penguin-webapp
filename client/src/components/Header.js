import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Still deciding";
      case false:
        return <a href='/auth/google'>Login With Google</a>;
      default:
        return (
          <li>
            <a href='/api/logout'>Logout</a>
          </li>
        );
    }
  }
  render() {
    const { auth } = this.props;
    return (
      <div className='header'>
        {" "}
        <img
          className='header__logo'
          src='/images/penguin.png'
          alt='grateful penguin logo'
        />
        <div>Grateful Penguin</div>
        <nav className='header__nav'>
          <ul className='header__ul'>
            <li className='header__li'>{this.renderContent()}</li>
          </ul>
        </nav>
        {/* <button>Login With Google</button> */}
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
)(Header);
