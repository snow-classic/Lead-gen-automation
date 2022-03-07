import React, { Component } from 'react';
import { GetJobs, getCampaignNames} from "../../actions/asyncActions"
import { connect } from "react-redux";
import { withRouter } from 'next/router'
import { Select } from 'antd';
import { Pagination } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import JobsCard from "./card";
import { Button } from 'react-bootstrap';

const { Option } = Select;

const Wrapper = styled.div``;
const Container = styled.div`
float:right;

`;
const JobsContainer = styled.div`
margin-top:1em;
padding:3em 0 0 0;
display:flex;
flex-direction:column;
justify-content:center;
`;
// const Download = styled.Button`
// padding: 3px;
// margin-left:5px;
// background:DodgerBlue,
// color:#fff;
// `;

class Jobs extends Component {

  state = {
    campaignDataSelected: [],
    unique: [],
    // defaultValue: "",
//NEW
    currentPage: 1,
    campaign_names: [],
    current_campaign: this.props.router.query.campaign,
    jobs: [],
    total_pages:""
  }

  componentDidMount = () => {
    getCampaignNames();
    if (this.props.router.query) {
      console.log("mount", this.props.router.query)

      this.setState({current_campaign: this.props.router.query.campaign})
    }
    // this.setState({current_campaign: this.state.campaign_names[0]})
    const data = {
      page: this.state.currentPage,
      campaign:this.state.current_campaign
    }
      GetJobs(data);
    }

  handleSaveToPC = (jsonData, filename) => {
  console.log("json data", jsonData)
  const fileData = JSON.stringify(jsonData);
  const blob = new Blob([fileData], {type: "text/plain"});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = `${filename}.json`;
  link.href = url;
  link.click();
 }
  handleChange = (e) => {
    // console.log("select", e);
    this.setState({ current_campaign: e, currentPage: 1 })
    // console.log("select",this.state);
    this.props.router.push({
      pathname: '/jobs',
      query: {campaign:e}
    }, undefined, { shallow: true })
    
    const data = {
      page: 1,
      campaign:e
    }
    GetJobs(data);
  }

  componentWillReceiveProps = (props) => { //this is called to before render method

    // this.setState({campaign_names: props.campaign_names})
    if (props.campaign.campaign_names_data) {
      // console.log("props recieved", props)
      this.setState({campaign_names : props.campaign.campaign_names_data.campaign_names})
    }
    // console.log("props recieved", props)
    if (props.jobs) {
      this.setState({jobs:props.jobs.data, total_pages:props.jobs.headers.total_items})
    }

  }

  handlePagination = page => {
    // console.log(page);
    this.setState({
      currentPage: page,
    });
    const data = {
      page: page,
      campaign:this.state.current_campaign
    }
    GetJobs(data);
   }

  render() {
    // console.log("this.state", this.state)
    if (!this.props.jobs) {
      return <div/>
    }
 
    // console.log("state", this.state)
    const cards = this.state.jobs.map(d => {
        return <JobsCard {...d} />
    })

        return (
            <Wrapper>
              <h4 className="title">JOBS</h4>
              <Container className="d-flex ">
                <Select
                  className="form-select  form-select-lg"
                  // showSearch
                  onChange={this.handleChange}
                    value={this.state.current_campaign? this.state.current_campaign: "All Jobs"}
                    style={{ width: 200 }}
                    placeholder="Select Campaign"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }
                >
                  {this.state.campaign_names.map((d, i) => {
                    return <Option value={d}>{ d}</Option>
                  })}
                </Select>
                <Button className="ml-5" type="primary" icon={<DownloadOutlined />} size="small" onClick={() => this.handleSaveToPC(this.props.jobs,`${this.state.current_campaign? this.state.current_campaign : "All Jobs"}+ ${this.state.currentPage} Jobs`)}>
                  Download
                </Button>
              </Container>
              <div className="container p-3 row">
                <Pagination simple current={this.state.currentPage} defaultPageSize={20} total={this.state.total_pages} onChange={this.handlePagination}/>
                <div className="d-flex justify-content-right flex-column">
                    {cards}
                </div>
                
                
              </div>
            </Wrapper>
        );
    }
}

const mapStateToProps = (store) => {
  // console.log("store in JOBS component", store);
  return {
    campaign: store.campaign,
    jobs: store.jobs.Jobs,
    // campaign_names:store.campaign.campaign_names_data
    // token: store.authData.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Jobs));
