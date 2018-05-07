import {combineReducers} from "redux";
// import { reducer as formReducer } from "redux-form";
import reducerIdea from "./reducerIdea";
import reducerComment from "./reducerComment";

const rootReducer = combineReducers({idea: reducerIdea, comment: reducerComment});

export default rootReducer;