import {GET_ALL_COMMENTS, COMMENT_DELETE, COMMENT_CREATE} from "../actions/actions";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_ALL_COMMENTS:
      return { ...state, commentList: action.payload };
    default:
      return state;
    case COMMENT_DELETE:
      return state;
    case COMMENT_CREATE:
      return {
        ...state,
        newIdea: action.payload
      };
  }
}
