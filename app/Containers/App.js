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
          <header>
          Links:
          {' '}
          <Link to="/">Home</Link>
          {' '}
          <Link to="/foo">Foo</Link>
          {' '}
          <Link to="/admin">{'admin (Login Required)'}</Link>
          {' '}
          <Link to="/admin/shop">{'shop (Login Required)'}</Link>
          {' '}
          <Link to="/login">Login</Link>
          {' '}
          <button onClick={() => logout()}>Logout</button>
        </header>
          <div className="page-container">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
