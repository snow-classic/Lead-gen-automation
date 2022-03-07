import { combineReducers } from "redux";
import authReducer from "./authReducer";
import campaignReducer from "./campaignReducer";
import spinnerReducer from "./spinnerReducer";
import jobsReducer from "./jobsReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  campaign: campaignReducer,
  spinner: spinnerReducer,
  jobs: jobsReducer,
  error: errorReducer,
});
