import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loggedInReducer from "./loggedInReducer";
import currentPatternReducer from "./currentPatternReducer";
import currentModelReducer from "./currentModelReducer";
import patternOptionsReducer from "./patternOptionsReducer";
import showModalReducer from "./showModalReducer";

export default combineReducers({
  user: userReducer,
  loggedIn: loggedInReducer,
  currentPattern: currentPatternReducer,
  currentModel: currentModelReducer,
  patternOptions: patternOptionsReducer,
  showModal: showModalReducer
});
