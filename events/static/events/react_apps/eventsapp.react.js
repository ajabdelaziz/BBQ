"use strict";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../flux/actions";


export class EventsApp extends React.Component {
  render() {
      return (
          <div>hello world </div>
    )
  }
}

function state_mapper(state) {
  //can pass in initial state objects into here
  return {
    ...state,
  };
}

function merge_props(stateProps, dispatchProps, ownProps) {
  //later add objects for async action creators
  // let { objects } = stateProps;
  let { dispatch } = dispatchProps;

  return {
    actions: {
      ...bindActionCreators(actionCreators, dispatch),
    },
    ...ownProps,
    ...stateProps,
    ...dispatchProps
  };
}

export default connect(state_mapper, dispatch => ({ dispatch }), merge_props)(
  EventsApp
);
