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
    padding:10px 0 10px 5px;
    margin-bottom:5px;
	
`
const InfoMessage = styled.div`
		color: #00529B;
		background-color: #BDE5F8;
		background-image: url('https://i.imgur.com/ilgqWuX.png');
`

class Success extends Component {

    render() {
        // console.log("error", this.props)
        return (
            <Wrapper>
                <SuccessfullMessage>Success : Campaign Successfully updated</SuccessfullMessage>
            </Wrapper>
        );
    }
}

export default Success;
