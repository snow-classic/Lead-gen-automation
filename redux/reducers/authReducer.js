import ActionTypes from "../actionTypes";
import initialState from "../initialState";

export default (state = initialState, action) => {
  // console.log("action in reducer", action, "initial state", state);
  switch (action.type) {
    case ActionTypes.AUTH_RESULT:
      return {
        ...state,
        authResult: action.payload,
      };
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        logout: action.payload,
      };
    default:
      return state;
  }
};
