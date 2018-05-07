import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import reducerIdea from "./reducerIdea";

const rootReducer = combineReducers({idea: reducerIdea, form: formReducer});

export default rootReducer;