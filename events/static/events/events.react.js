"use strict";

import ReactDOM from "react-dom";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./flux/reducers";
import EventsApp from "./eventsapp.react";

// note: _object_data and study_id are set in the containing page
let store = createStore(reducer, {
  objects: {
    ..._object_data
  },
  ui: {}
});

ReactDOM.render(
  <Provider store={store}>
    <EventsApp />
  </Provider>,
  document.getElementById("main")
);
