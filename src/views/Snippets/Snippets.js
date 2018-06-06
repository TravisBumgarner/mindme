import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import snippetSelectors from '../../store/snippets/selectors';

import SnippetListItem from '../../components/SnippetListItem';

import { SnippetsWrapper } from './Snippets.styles';

export class Snippets extends Component {
  handleSnippetEdit = (id) => {
    const {
      history: { push },
    } = this.props;

    push(`/snippets/edit/${id}`);
  };

  render() {
    const {
      snippets,
    } = this.props;

    const SnippetsListItems = snippets.map((s) => {
      return <SnippetListItem handleSnippetEdit={this.handleSnippetEdit} details={s} key={s.id} />;
    });

    return (
      <SnippetsWrapper>
        { SnippetsListItems }
      </SnippetsWrapper>
    );
  }
}

Snippets.propTypes = {
  snippets: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(state => ({
  snippets: snippetSelectors.getSelectedSnippets(state),
}), {

})(Snippets);
