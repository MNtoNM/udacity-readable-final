// import _ from 'lodash';
import {  RECEIVE_CATEGORIES } from '../actions/actions_categories';

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        categories: action.categories.data.categories
      })
    default:
      return state;
  }
}
