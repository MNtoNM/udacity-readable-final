import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/actions_categories';
import { Link } from 'react-router-dom';

class CategoryIndex extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    console.log("THIS: ", this);
  }

  renderCategories() {
    return _.map(this.props.categories.categories, cat => (
      <span key={cat.name}><a href={`/${cat.path}/category`}>{cat.name}</a>&nbsp;&nbsp;</span>
    ));
  }

  render() {
    return (
      <div>
        <h3>Viewing Posts by Category</h3>
        <ul>
          {this.renderCategories() }
          <span>| <Link to={'/'}>View All Posts</Link></span>
        </ul>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // posts: state.posts,
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchCategories
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
