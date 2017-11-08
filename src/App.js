import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators} from 'redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import PostsIndex from './components/posts_index';
import CategoryIndex from './components/category_index';
import PostNew from './components/post_new';
import PostDetail from './components/post_detail';
import PostEdit from './components/post_edit';
import Header from './components/header';
import { fetchPost } from './actions/actions_posts';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/posts/new' render={() => (
              <div>
                <Header />
                <PostNew />
              </div>
            )}
          />
          <Route exact path='/post/:id/edit' render={() => (
              <div>
                <Header />
                <PostEdit />
              </div>
            )}
          />
          <Route exact path="/post/:id" render={
            (props) =>
            <div>
              <Header />
              <PostDetail post={this.props.fetchPost()} {...props} />
            </div>
          } />

          <Route exact path='/' render={() => (
            <div>
              <Header />
              <PostsIndex />
            </div>
            )}
          />

        <Route exact path='/:category/category/' render={() => (
            <div>
              <Header />
              <CategoryIndex />
            </div>
            )}
          />
        </div>
      </BrowserRouter>

    );
  }
}

export default connect(null, { fetchPost })(App);
