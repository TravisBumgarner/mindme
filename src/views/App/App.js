import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from '../Home';
import NotFound from '../NotFound';
import Nav from '../../containers/Nav';

import requestActions from '../../store/requests/actions';

import { AppWrapper } from './App.styles';

export class App extends Component {
  render() {
    const {
      getRequest,
    } = this.props;

    getRequest('snippets/');
    getRequest('authors/');
    getRequest('categories/');

    return (
      <AppWrapper>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </AppWrapper>
    );
  }
}

App.propTypes = {
};

export default withRouter(connect(state => ({
}), {
  getRequest: requestActions.getRequest,
})(App));

