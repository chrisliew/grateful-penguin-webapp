import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";
import * as actions from "./actions";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Home} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
