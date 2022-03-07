import ActionTypes from "../actionTypes";
import initialState from "../initialState";

export default (state = initialState, action) => {
  // console.log("in jobs reducer", action);
  switch (action.type) {
    case ActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };
    case ActionTypes.CLEAR_UPDATE_SUCCESS:
      return {
        ...state,
        error: "",
      };
    case ActionTypes.ERROR:
      return {
        ...state,
        // error: JSON.stringify(action.payload),
        error: action.payload,
      };
    default:
      return state;
  }
};
