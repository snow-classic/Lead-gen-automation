import React, { Component } from 'react';
import Spin from "./modalSpinner";
import { connect } from "react-redux";

class Wrapper extends Component {
    render() {
        console.log("in wrapper ",this.props)
      return (
        <div>
            {this.props.spinner && <Spin/>}
        </div>
      )
    }
}
 
const mapStateToProps = (store) => {
  return {
      spinner:store.spinner.spin
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);