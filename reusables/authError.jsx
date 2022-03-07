import React, { Component } from 'react';

import styled from 'styled-components'


const Wrapper = styled.div``
const ErrorMessage = styled.div`
	color: #D8000C;
	background-color: #FFBABA;
    padding:10px 0 10px 0;
    margin-bottom:5px;
	
`
const WarningMessage = styled.div`
    color: #9F6000;
	background-color: #FEEFB3;
	background-image: url('https://i.imgur.com/Z8q7ww7.png');
`
const SuccessfullMessage = styled.div`
    color: #4F8A10;
	background-color: #DFF2BF;
	background-image: url('https://i.imgur.com/Q9BGTuy.png');
`
const InfoMessage = styled.div`
		color: #00529B;
		background-color: #BDE5F8;
		background-image: url('https://i.imgur.com/ilgqWuX.png');
`

class Error extends Component {

    render() {
        // console.log("error prop", this.props)
        return (
            <Wrapper>
                {/* <ErrorMessage>Error : {JSON.stringify(this.props)}</ErrorMessage> */}
                
            <ErrorMessage>Error : {JSON.stringify(this.props.auth_error.data.message)}</ErrorMessage> 
                    
            </Wrapper>
        );
    }
}

export default Error;
