import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { connect } from "react-redux";

import { Router, useRouter } from "next/router";
import SideBar from "./sider"
import Head from "next/head";
const { Header, Content, Footer, Sider } = Layout;

function SiderDemo({children}){
   const Router = useRouter();    
// console.log("children",loading)
    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Head>
          <title>Admin Panel</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SideBar/>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            {/* { loading && <Spinner/>} */}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Classic Informatics ©2021 </Footer>
        </Layout>
      </Layout>
    );
//   }
}


const mapStateToProps = (store) => {
  // console.log("store in layout component", store);
  return {
    campaign: store.campaign,
    // loading: true
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // campaign: (data) => dispatch(GetCampaign)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SiderDemo);