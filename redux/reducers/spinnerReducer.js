import ActionTypes from "../actionTypes";
import initialState from "../initialState";

export default (state = {}, action) => {
  //   console.log("action in spinner reducer", action, "initial state", state);
  switch (action.type) {
    case ActionTypes.SPINNER: {
      return {
        ...state,
        spin: action.payload,
      };
    }
    default:
      return state;
  }
};
