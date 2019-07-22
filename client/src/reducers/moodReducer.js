import { ADD_MOOD } from "../actions/types";

export default (state = "", action) => {
  switch (action.type) {
    case ADD_MOOD:
      return action.payload || false;
    default:
      return state;
  }
};
