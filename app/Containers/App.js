import Footer from '../Components/Footer'
import Header from '../Components/Header'
import AppleBusket from './AppleBusket'

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className="app">
      <Header />
        <div className="main-container">
          <AppleBusket />
          <div className="page-container">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
