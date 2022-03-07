import React, { Component } from 'react';
import styled from 'styled-components'
import { Modal, Button, Input } from 'antd';
import Success from "../reusables/successMessage"
import ErrorMessage from "../reusables/errorMessage"
import { UpdateCampaign, ClearError, ClearUpdateSuccess} from "../actions/asyncActions"
import { connect } from "react-redux";
// import Spinner from '../components/spinner/modalSpinner'
const InputField = styled.input`
 width:100%;
 margin-bottom:5px;
 border:1px solid #eee;
 padding: 5px 5px 5px 5px;
`;


class EditCampaign extends Component {

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
            status: "",
            id:""
        },
        error:[]
    }

    showModal = () => {
            this.setState({showmodal: true})
    };

    handleOk = () => {
        if (this.props.campaign.updatecampaign) {
            this.props.edit(false);
            ClearError()
            ClearUpdateSuccess();
            return
        }
        UpdateCampaign(this.state.data)
    };

    handleCancel = () => {
        this.props.edit(false)
        ClearError();
        ClearUpdateSuccess();
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
        this.setState(({ data: props.visiblity }))

        if (props.campaign.updatecampaign) {
            this.setState({ data: props.campaign.updatecampaign })
            // this.props.edit(false)
        }
        if (props.error) {
            if (props.error.error) {
                this.setState({showmodal: true})
            }
        }
        
        // const err =[]
        // if (props.campaign.updateerror) {
        //     // props.campaign.updateerror.detail.map(d => {
        //     // err.push(d)
        //   console.log('this.props.campaign.updateerror', this.props.campaign.updateerror)
        //     // this.setState({error: JSON.parse(this.props.campaign.updateerror)})
        // // })
        // }

    }
 
    render() {
        //   console.log('this.props.campaign.updateerror', this.props.campaign.updateerror)

        return (
            <div>
                <Modal title="Edit Campaign" visible={this.props.visiblity} onOk={e =>this.handleOk()} onCancel={e =>this.handleCancel()}>
                   
                    {/* { this.props.spin? <Spinner/>: <div/>} */}
                    {/* <div> {this.props.campaign.updateerror ? <Error />  : <div />}</div> */}
                    {this.props.error.error ? <ErrorMessage {...this.props.error.error.response}/> : null}
                    <div>{ this.props.campaign.updatecampaign ? <Success/>: <div/>}</div>
                    <InputField placeholder="Campaign name" type="text" value={this.state.data.campaign_name} name="campaign_name" onChange={this.inputHandler} />
              
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
            </div>
        );
    }
}




const mapStateToProps = (store) => {
//   console.log("store in EDIT CAMPAIGN", store);
  return {
      campaign: store.campaign,
      spin:store.spinner.spin,
      error: store.error
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCampaign);
