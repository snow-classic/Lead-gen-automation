import SignComp from "../components/login/loginComponent";
import { connect } from "react-redux";

function Home() {
  return (
    <>
      <SignComp />
    </>
  );
}
const mapStateToProps = (store) => {
  // console.log("store", store);
  return {
    auth_data: store.auth,
    login: store.isLoggedIn,
    // token: store.authData.token
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // loginQuery: (data) => dispatch(CheckLogin(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
