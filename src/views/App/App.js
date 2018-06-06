import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import Home from '../Home';
import NotFound from '../NotFound';
import Categories from '../Categories';
import CreateEditCategory from '../CreateEditCategory';
import CreateEditSnippet from '../CreateEditSnippet';
import Snippets from '../Snippets';

import Nav from '../../components/Nav';

import sessionActions from '../../store/session/actions';

import { AppWrapper } from './App.styles';

export class App extends Component {
  componentWillMount() {
    const {
      loadSession,
    } = this.props;

    loadSession();
  }

  render() {
    const {
      loaded,
    } = this.props;

    return (
      loaded ? (
        <AppWrapper>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories" component={Categories} />
            <Route path="/categories/create" component={CreateEditCategory} />
            <Route exact path="/snippets" component={Snippets} />
            <Route path="/snippets/create" component={CreateEditSnippet} />
            <Route component={NotFound} />
          </Switch>
        </AppWrapper>
      ) : (
        <CircularProgress />
      )

    );
  }
}

App.propTypes = {
  loaded: PropTypes.bool.isRequired,
  loadSession: PropTypes.func.isRequired,
};

export default withRouter(connect(state => ({
  loaded: state.session.meta.loaded,
}), {
  loadSession: sessionActions.loadSession,
})(App));

