"use strict";
import React from "react";
import { bindAsyncActionCreators } from "../flux/utils";
import { bindActionCreators } from "redux";
import * as asyncActionCreators from "../flux/async_actions";
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
  return {
    ...state,
  };
}

function merge_props(stateProps, dispatchProps, ownProps) {
  let { objects } = stateProps;
  let { dispatch } = dispatchProps;
  debugger
  return {
    actions: {
      ...bindActionCreators(actionCreators, dispatch),
      ...bindAsyncActionCreators(asyncActionCreators, dispatch, objects)
    },
    ...ownProps,
    ...stateProps,
    ...dispatchProps
  };
}

export default connect(state_mapper, dispatch => ({ dispatch }), merge_props)(
  EventsApp
);
