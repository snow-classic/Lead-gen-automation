import actionTypes from "../redux/actionTypes";

export const authQuery = (data) => ({
  type: actionTypes.AUTH_RESULT,
  payload: data,
});

export const Spinner = (data) => ({
  type: actionTypes.SPINNER,
  payload: data,
});

export const authError = (data) => ({
  type: actionTypes.AUTH_ERROR,
  payload: data,
});

//CAMPAIGN
export const getCampaignsSuccess = (data) => ({
  type: actionTypes.GET_CAMPAIGNS_SUCCESS,
  payload: data,
});
export const getCampaignsError = (data) => ({
  type: actionTypes.GET_CAMPAIGNS_ERROR,
  payload: data,
});
export const postCampaignSuccess = (data) => ({
  type: actionTypes.POST_CAMPAIGN_SUCCESS,
  payload: data,
});
export const postCampaignError = (data) => ({
  type: actionTypes.POST_CAMPAIGN_ERROR,
  payload: data,
});
export const deleteCampaignSuccess = (data) => ({
  type: actionTypes.DELETE_CAMPAIGN_SUCCESS,
  payload: data,
});
export const deleteCampaignError = (data) => ({
  type: actionTypes.DELETE_CAMPAIGN_ERROR,
  payload: data,
});
export const updateCampaignSuccess = (data) => ({
  type: actionTypes.UPDATE_CAMPAIGN_SUCCESS,
  payload: data,
});
export const updateCampaignError = (err) => ({
  type: actionTypes.UPDATE_CAMPAIGN_ERROR,
  payload: err.response.data.detail,
});

export const ClearUpdateSuccess = () => ({
  type: actionTypes.CLEAR_UPDATE_SUCCESS,
});

//get campaign names
export const getCampaignNames = (data) => ({
  type: actionTypes.GET_CAMPAIGN_NAMES_SUCCESS,
  payload: data,
});
export const getCampaignsNamesError = (data) => ({
  type: actionTypes.GET_CAMPAIGN_NAMES_ERROR,
  payload: data,
});

//logout
export const logout = (data) => ({
  type: actionTypes.LOGOUT_SUCCESS,
  payload: data,
});
export const logoutError = (data) => ({
  type: actionTypes.LOGOUT_ERROR,
  payload: data,
});

//JOBS
export const getJobsSuccess = (data) => ({
  type: actionTypes.GET_JOBS_SUCCESS,
  payload: data,
});
export const getJobsError = (data) => ({
  type: actionTypes.GET_JOBS_ERROR,
  payload: data,
});

// ERROR
export const Error = (data) => ({
  type: actionTypes.ERROR,
  payload: data,
});

export const clearError = () => ({
  type: actionTypes.CLEAR_ERROR,
});
