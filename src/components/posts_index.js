import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/actions_categories';
import { fetchPosts } from '../actions/actions_posts';
import PostRow from './post_row';

class PostsIndex extends Component {
  state = {
    sortBy: 'createdAt'
}


  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
  }

  renderCategories() {
    return _.map(this.props.categories.categories, cat => (
      <span key={cat.name}> <a href={`/${cat.path}/category`}>{cat.name}</a>&nbsp;&nbsp;</span>
    ));
  }

  renderPosts() {
    const sortedPosts = _.orderBy(this.props.posts, [this.state.sortBy], ['desc'])

    return _.map(sortedPosts, post => (
      <PostRow key={post.id} {...post} />
    ));
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.renderPosts() }
        </ul>

        <ul className="select-options">
          <span> Or view posts by category: </span>
          {this.renderCategories() }
          <span className="col-md-3">
            <span className="right">
              <span
                onClick={() => {
                  this.setState({ sortBy: 'createdAt'});
                }}>
                <span className="pseudo-link">By Date</span>
              </span> |
              <span
                onClick={() => {
                  this.setState({ sortBy: 'voteScore'});
                }}>
                &nbsp;<span className="pseudo-link">By Popularity</span>
              </span>
            </span>
          </span>
        </ul>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // posts: state.posts,
    categories: state.categories,
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchCategories,
        fetchPosts
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
