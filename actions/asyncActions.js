import Store from "../redux/store";
import * as syncActions from "./syncActions";
import { omit } from "lodash";
import AxiosClient from "../HOC/axiosClient";
// export const AuthQuery = (req, res) => {
//   console.log("request", req);
//   const data = {
//     username: req.username,
//     password: req.password,
//   };
//   Store.dispatch(syncActions.Spinner(true));
//   Axios.post(`${BASE_URL}/login/`, data)
//     .then((response) => {
//       console.log(response.data);
//       Store.dispatch(syncActions.Spinner(false));
//       setCookie("token", response.data.token);
//       Store.dispatch(syncActions.authQuery(response.data));
//     })
//     .catch((err) => {
//     });
// };

export const Logout = () => {
  AxiosClient.get(`/logout/`)
    .then((response) => {
      Store.dispatch(syncActions.logout(response.data));
    })
    .catch((err) => {});
};

export const getCampaignNames = () => {
  AxiosClient.get(`/lookups/`)
    .then((response) => {
      Store.dispatch(syncActions.getCampaignNames(response.data));
    })
    .catch((err) => {});
};

export const DeleteCampaign = (req) => {
  AxiosClient.delete(`/campaigns/${req}/`)
    .then((response) => {
      Store.dispatch(syncActions.deleteCampaignSuccess(response));
      GetCampaigns();
    })
    .catch((err) => {});
};

export const GetCampaigns = (req, res) => {
  AxiosClient.get(`/campaigns/`)
    .then((response) => {
      Store.dispatch(syncActions.getCampaignsSuccess(response.data));
    })
    .catch((err) => {});
};

export const PostCampaign = (req, res) => {
  AxiosClient.post(`/campaigns/`, req)
    .then((response) => {
      Store.dispatch(syncActions.postCampaignSuccess(response.data));
      GetCampaigns();
    })
    .catch((err) => {});
};

export const UpdateCampaign = (req, res) => {
  const data = omit(req, "id");
  AxiosClient.patch(`/campaigns/${req.id}/`, data)
    .then((response) => {
      Store.dispatch(syncActions.updateCampaignSuccess(response.data));
      GetCampaigns();
    })
    .catch((err) => {});
};

export const ClearError = (req, res) => {
  Store.dispatch(syncActions.clearError());
};
export const ClearUpdateSuccess = (req, res) => {
  Store.dispatch(syncActions.ClearUpdateSuccess());
};

// JOBS

export const GetJobs = (req, res) => {
  if (req.campaign) {
    const url = `/jobs/?page=${req.page}&campaign=${req.campaign}`;
    AxiosClient.get(url)
      .then((response) => {
        Store.dispatch(syncActions.getJobsSuccess(response));
      })
      .catch((err) => {});
  } else {
    const url = `/jobs/?page=${req.page}`;
    AxiosClient.get(url)
      .then((response) => {
        Store.dispatch(syncActions.getJobsSuccess(response));
      })
      .catch((err) => {});
  }
};
