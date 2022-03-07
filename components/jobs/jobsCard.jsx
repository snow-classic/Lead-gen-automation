import React from 'react';
import styled from 'styled-components'
import { Rating } from 'react-simple-star-rating'

const Wrapper = styled.div`
width:80%;
border: 1px solid #d9d9d9;
padding:1em;
margin-bottom:10px;

`;
const Container = styled.div`
display:flex;
justify-content:space-between;
padding-top:1em;
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
            <Wrapper>
                <Container>
                    <CompanyName>{company_name}</CompanyName>
                    <Campaign>Campaign : {campaign}</Campaign>
                </Container>
                <JobTitle>{job_title}</JobTitle>
                <Location>{location}</Location>
                <Description>{description}</Description>
                <Container>
                    <PostingDate>Posted on : { posting_date}</PostingDate>
                    <RatingValue>
                         
                    <Rating ratingValue={rating * 10} size="20" edit="false"/>
                        {/* || {rating}   */}
                    </RatingValue>
                </Container>
            </Wrapper>
        );
    }
}



export default JobsCard;
