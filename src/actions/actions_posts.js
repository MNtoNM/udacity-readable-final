import * as PostsAPIUtil from '../util/posts_api_util';

// RECEIVE ALL POSTS
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  PostsAPIUtil
      .fetchPosts()
      .then(posts => dispatch(receivePosts(posts)))
);

// RECEIVE ONE POST
export const RECEIVE_POST = 'RECEIVE_POST';

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const fetchPost = (id) => dispatch => (
  PostsAPIUtil
    .fetchPost(id)
    .then(post => dispatch(receivePost(post)))
);


// POST VOTE
export const RECEIVE_POSTVOTE = 'RECEIVE_POSTVOTE';

export const receivePostVote = (id, valence) => ({
  type: RECEIVE_POSTVOTE,
  id,
  valence,
});

export const postVote = (id, valence) => dispatch => (
  PostsAPIUtil
  .postVote(id, valence)
  .then(res => dispatch({ type: RECEIVE_POSTVOTE, payload: res.data }))
);
