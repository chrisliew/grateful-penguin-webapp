import axios from "axios";
import { ADD_GRATITUDE, FETCH_USER, ADD_MOOD } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res });
};

export const addGratitude = userData => async dispatch => {
  const res = await axios.post("/api/gratitude", userData);
  dispatch({ type: ADD_GRATITUDE, payload: res });
};

export const addMood = mood => {
  return { type: ADD_MOOD, payload: mood };
};
