import ActionTypes from "../actionTypes";
import initialState from "../initialState";

export default (state = initialState, action) => {
  // console.log("in jobs reducer", action);
  switch (action.type) {
    case ActionTypes.GET_JOBS_SUCCESS:
      return {
        ...state,
        Jobs: action.payload,
      };
    default:
      return state;
  }
};
