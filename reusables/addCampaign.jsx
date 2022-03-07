import { Modal, Select } from 'antd';
import styled from 'styled-components'
import {PostCampaign, ClearError, ClearUpdateSuccess} from "../actions/asyncActions"
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';

import ErrorMessage from '../reusables/errorMessage'

const { Option } = Select;

const InputField = styled.input`
 width:100%;
 margin-bottom:5px;
 border:1px solid #eee;
 padding: 5px 5px 5px 5px;
`;


class App extends Component {
    
    state = {
        showmodal: false,
        data: {
            campaign_name: "",
            frequency: "",
            urls: "",
            page: "",
            job_titles: "",
            locations: "",
            interval: "",
            start_date: "",
            end_date: "",
            status:""
        }
        
    }

  showModal = () => {
      this.setState({showmodal:true})
  };

  handleOk = () => {
    ClearError()
    ClearUpdateSuccess()
    PostCampaign(this.state.data)
  };

  handleCancel = () => {
    ClearError();
    ClearUpdateSuccess()
      this.setState({showmodal:false})
  };
    
    inputHandler = (e) => {
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [e.target.name]:e.target.value
            }
        }))
     }

    componentWillReceiveProps = (props) => {
      if (props.campaign.newcampaign) {
 
        if (props.campaign.newcampaign.id) {
          console.log("in new campaign", props)
          this.setState({ showmodal: false })
              ClearUpdateSuccess()
        }
      }
  }

render() { 
  return (
    <>
      <Button type="primary" onClick={this.showModal}>
        Add Campaign
      </Button>
          <Modal title="Add Campaign" visible={this.state.showmodal} onCancel={this.handleCancel}
            footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              Submit
            </Button>
          ]} >
        {this.props.error.error ? <ErrorMessage {...this.props.error.error.response}/> : null}
              <InputField placeholder="Campaign name" type="text" value={this.state.data.campaign_name} name="campaign_name" onChange={ this.inputHandler}/>
              
              <InputField placeholder="Frequency" value={ this.state.data.frequency} name="frequency" onChange={ this.inputHandler}/>
              <InputField placeholder="Status can be either 0 or 1" value={ this.state.data.status} name="status" onChange={ this.inputHandler}/>
             {/* <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Status"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }
                >
                    <Option value="1">Active</Option>
                    <Option value="2">In Active</Option>
             </Select> */}
              <InputField placeholder="Url" value={ this.state.data.urls} name="urls" onChange={ this.inputHandler}/>
              
              <InputField placeholder="Page" value={ this.state.data.page} name="page" onChange={ this.inputHandler}/>
              
              <InputField placeholder="Job Titles" value={ this.state.data.job_titles} name="job_titles" onChange={ this.inputHandler}/>
              
              <InputField placeholder="Locations" value={ this.state.data.locations} name="locations" onChange={ this.inputHandler}/>
              
              <InputField placeholder="Interval" value={ this.state.data.interval} name="interval" onChange={ this.inputHandler}/>
              
              <InputField placeholder="Start Date" type="date" value={ this.state.data.start_date} name="start_date" onChange={ this.inputHandler}/>
              
              <InputField placeholder="End Date" type="date" value={ this.state.data.end_date} name="end_date" onChange={ this.inputHandler}/>
      </Modal>
    </>
      );
    }
};

const mapStateToProps = (store) => {
  // console.log("store in ADD CAMPAIGN", store);
  return {
      campaign: store.campaign,
      spin:store.spinner.spin,
      error: store.error
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App)