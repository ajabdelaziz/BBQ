"use strict";
import { combineReducers } from "redux";

export function ui(state, action) {
  state = state ? state : {};

  switch (action.type) {
    case "GET__STEP":
      return {
        ...state,
        step: action.step
      };
    default:
      return state;
  }
}


const reducer = combineReducers({
  ui,
});
export default reducer;