import axios from "axios";
import { FETCH_GRATITUDES, ADD_GRATITUDE, FETCH_USER } from "./types";

export const fetchGratitudes = () => {
  return function(dispatch) {
    axios.get("http://localhost:5000/api/gratitudes/").then(res => {
      dispatch({ type: FETCH_GRATITUDES, payload: res.data });
    });
  };
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res });
};
