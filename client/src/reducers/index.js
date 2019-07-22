import { combineReducers } from "redux";
import authReducer from "./authReducer";
import moodReducer from "./moodReducer";

export default combineReducers({
  auth: authReducer,
  mood: moodReducer
});
