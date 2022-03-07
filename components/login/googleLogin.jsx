import React, { Component } from 'react';
import { GoogleLogin } from "react-google-login";
import GoogleButton from "react-google-button";
import styled from "styled-components";


const OtherLogin = styled.div`
  align-self: center;
  margin-top: 2em;
  padding-top: 1em;
`;

class GoogleLogin extends Component {
    render() { 
        return <div>
            <OtherLogin>
                <GoogleLogin
                    clientId={process.env.NEXT_PUBLIC_AUTH_KEY}
                    buttonText="Sign In with Google"
                    render={(renderProps) => (
                    <GoogleButton
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    >
                        Sign in with Google
                    </GoogleButton>
                    )}
                    onSuccess={responseGoogleSuccess}
                    onFailure={responseGoogleFail}
                    cookiePolicy={"single_host_origin"}
                    style={{
                    alignSelf: "end",
                    }}
                />
        </OtherLogin>
        </div>;
    }
}
 
export default GoogleLogin;