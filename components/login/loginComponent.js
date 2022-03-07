import { Router, useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import styled from "styled-components";
import { authenticate, setCookie, removeCookie } from "../../actions/auth";
import AxiosClient from "../../HOC/axiosClient";

import { connect } from "react-redux";
import Store from "../../redux/store";
import * as syncActions from "../../actions/syncActions";
import ErrorMessage from "../../reusables/authError";

// import { ClearError } from "../actions/asyncActions";
const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-top: 7%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2em;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 2px solid #e2e2e2;
  padding-bottom: 2em;
`;

const Border = styled.div``;
function Login({ store }) {
  const Router = useRouter();

  const initialState = {
    userid: "admin",
    pass: "cli",
  };

  const [userid, setuserid] = useState("");
  const [pass, setpass] = useState("");
  const [Error, setError] = useState(false);

  useEffect(() => {
    Store.dispatch(syncActions.clearError());
  }, []);

  const onFinish = (values) => {
    if (values.remember) {
      setCookie(userid, pass);
    } else {
      removeCookie(userid, pass);
    }
    const data = {
      username: userid,
      password: pass,
    };
    AxiosClient.post(`/login/`, data)
      .then((response) => {
        // Store.dispatch(syncActions.clearError());

        authenticate(response.data, () => {
          Router.push("/dashboard");
          // location.reload();
        });
      })
      .catch((err) => {});
  };

  // const responseGoogleSuccess = (response) => {
  //   console.log(response.tokenObj);
  //   const responseData = {
  //     token: response.tokenObj.access_token,
  //     expires: response.tokenObj.expires_in,
  //   };

  //   Store.dispatch(syncActions.clearError());
  //   authenticate(responseData.token, () => {
  //     Router.push("/dashboard");
  //   });
  // };
  // const responseGoogleFail = (response) => {
  //   console.log(response);
  // };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Wrapper>
      <Container>
        <div
          style={{
            marginLeft: "10px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          {store.error.error ? (
            <ErrorMessage auth_error={store.error.error.response} />
          ) : (
            <div />
          )}
        </div>
        <LoginContainer>
          <Form
            name="normal_login"
            className="login-form"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                value={initialState.userid}
                name="userid"
                onChange={(e) => setuserid(e.target.value)}
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                value={initialState.pass}
                // prefix={<LockOutlined className="site-form-item-icon" />}
                name="pass"
                onChange={(e) => setpass(e.target.value)}
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" block size="medium">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </LoginContainer>
      </Container>
    </Wrapper>
  );
}
const mapStateToProps = (store) => {
  return {
    store: store,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
