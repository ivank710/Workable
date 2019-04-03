import { RECEIVE_SAVED_KEYWORDS } from '../actions/keyword_actions';

const KeywordsReducer = ( state = {}, action) => {
  Object.freeze(state);
  // let newState = Object.assign({}, state);
  switch (action.type) {
      case RECEIVE_SAVED_KEYWORDS:
          return Object.assign({}, action.keywords.data)
      default:
          return state;
  }    
};

export default KeywordsReducer;