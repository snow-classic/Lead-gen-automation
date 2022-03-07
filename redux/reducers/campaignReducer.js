import ActionTypes from "../actionTypes";
import initialState from "../initialState";

export default (state = initialState, action) => {
  // console.log("action in reducer", action.payload);
  switch (action.type) {
    case ActionTypes.GET_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        AllCampaign: action.payload,
      };
    case ActionTypes.GET_CAMPAIGN_BY_ID_SUCCESS:
      return {
        ...state,
        campaign: action.payload,
      };
    case ActionTypes.UPDATE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        updatecampaign: action.payload,
      };
    case ActionTypes.DELETE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        deletecampaign: action.payload,
      };
    case ActionTypes.POST_CAMPAIGN_SUCCESS:
      return {
        ...state,
        newcampaign: action.payload,
      };
    case ActionTypes.CLEAR_UPDATE_SUCCESS:
      return {
        ...state,
        updatecampaign: "",
        newcampaign: "",
      };
    case ActionTypes.GET_CAMPAIGN_NAMES_SUCCESS:
      return {
        ...state,
        campaign_names_data: action.payload,
      };
    default:
      return state;
  }
};
