export function bindAsyncActionCreators(actionCreators, ...args) {
  let bound_action_creators = {};
  for (let [k, fn] of actionCreators) {
    if (typeof fn == "function") {
      bound_action_creators[k] = fn.bind(actionCreators, ...args);
    }
  }
  return bound_action_creators;
}