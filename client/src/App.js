import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";
import * as actions from "./actions";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";

const Landing = () => <h2>Landing</h2>;

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
            <Route exact path='/' component={Landing} />
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
