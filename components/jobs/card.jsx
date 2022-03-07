import React from 'react';
import styled from 'styled-components'
import { Rating } from 'react-simple-star-rating'

const Wrapper = styled.div`


`;
const Container = styled.div`

`;
const Campaign = styled.div``;
const CompanyName = styled.div`
color:#3333ff;
font-weight: 900;
font-size:20px;
`;
const Description = styled.div`
border-bottom: 1px solid #999
padding:2em 1em 2em 1em;
`;
const Domain = styled.div``;
const JobTitle = styled.div`
font-weight:bolder;
`;
const Location = styled.div`
color: #999999
`;
const PostingDate = styled.div``;
const RatingValue = styled.div``;

class JobsCard extends React.Component {

    render() {
        const {company_name, campaign, description, job_title, location, posting_date, rating } = this.props;
        // console.log(this.props)
        return (
            <Wrapper className="mt-2 col-lg-9 d-flex align-items-stretch">
                <Container className="card container">
                    <div className="card-body">
                        <div className=" d-flex justify-content-between mb-3">
                            <h5 className="card-title text-primary">{company_name}</h5>
                            <h5 className="card-title">{ campaign}</h5>
                        </div>
                        
                        <h6 className="card-subtitle">{job_title}</h6>
                        <h6 className="card-subtitle mb-2 mt-2 text-muted">{location}</h6>
                        <p className="card-text">{ description}</p>
                    </div>
                    <div className="container d-flex justify-content-between mb-3">
                        <div className="card-text">Posted on :{posting_date}</div>
                        <div className="float-end">
                            <Rating ratingValue={rating * 10} size="20" edit="false"/>
                        </div>
                    </div>
                </Container>
            </Wrapper>
        );
    }
}



export default JobsCard;
