import React, { Component } from 'react';
import styled from "styled-components";
import { connect } from "react-redux";
import {GetCampaigns} from "../../actions/asyncActions"
import Table from '../../reusables/campaignTable'
import AddCampaign from "../../reusables/addCampaign"

const Wrapper = styled.div`

`;
const Container = styled.div`
display:flex;
justify-content: space-between;
margin: 0 10px 20px 10px;
`;

class Campaign extends Component {

    componentDidMount = () => {
        GetCampaigns();
    }

    render() {
        return (
            <Wrapper>
                <Container>
                    <h1>Campaigns</h1>
                 <AddCampaign />
                </Container>
                
                <Table {...this.props.campaign}/>
            </Wrapper>
        );
    }
}


const mapStateToProps = (store) => {
  // console.log("store in CAMPAIGN component", store);
  return {
    campaign: store.campaign,
    // token: store.authData.token
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // campaign: (data) => dispatch(GetCampaign)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campaign);
