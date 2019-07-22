import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Still deciding";
      case false:
        return (
          <div>
            {this.props.auth.firstName}
            <a href='/auth/google' style={{ textDecoration: "none" }}>
              Login With Google
            </a>
          </div>
        );
      default:
        return (
          <li className='header__li'>
            <div>
              {this.props.auth.firstName}
              <a
                href='/api/logout'
                style={{ textDecoration: "none", paddingLeft: "1em" }}
              >
                Logout
              </a>
            </div>
          </li>
        );
    }
  }
  render() {
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
          <ul className='header__ul'>{this.renderContent()}</ul>
        </nav>
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
