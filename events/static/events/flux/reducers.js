"use strict";
import { combineReducers } from "redux";

export function ui(state, action) {
  state = state ? state : {};

  switch (action.type) {
    default:
      return state;
  }
}


const reducer = combineReducers({
  ui,
});
export default reducer;