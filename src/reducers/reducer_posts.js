// import _ from 'lodash';
import { RECEIVE_POSTS, RECEIVE_POSTVOTE, RECEIVE_POST } from '../actions/actions_posts';

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      const posts = action.posts.data
      return {
        ...state,
        ...posts
      }
    //   const postsArray = action.posts.data;
    //   // Turn it into hashobjects for increased performance and easier handling
    //   const posts = postsArray.reduce(
    //   (map, obj) => {
    //     map[obj.id] = obj;
    //     return map;
    //   },
    //   {}
    // );
    // return {
    //   ...state,
    //   ...posts
    // };
    case RECEIVE_POST:
    console.log("receive post action: ", action);
    // return { ...state, [action.post.data.id]: action.post.data };
    const post = action.post.data
    return {...state, ...post}

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
