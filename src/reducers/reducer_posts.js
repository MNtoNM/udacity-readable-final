// import _ from 'lodash';
import { RECEIVE_POSTS, RECEIVE_POSTVOTE, RECEIVE_POST } from '../actions/actions_posts';

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        posts: action.posts.data
      });
    case RECEIVE_POST:
    console.log("receive post action: ", action);
    return { ...state, [action.post.data.id]: action.post.data };

    case RECEIVE_POSTVOTE:
    // console.log("postvote action: ", action.post.data);
      // return Object.assign({}, state, {
        // posts: action.payload.voteScore
      // })
      return state;
    default:
      return state;
  }
}
