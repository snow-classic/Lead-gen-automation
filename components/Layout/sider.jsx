import { useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Router, useRouter } from "next/router";
import { removeCookie, getCookie } from "../../actions/auth";
import AxiosClient from "../../HOC/axiosClient"
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function SiderBar() {

  const Router = useRouter();
  const [collapsed, setcollapsed] = useState(false);
    
  const ClickHandler = (e) => {
      e.preventDefault;
      // console.log(e)
      Router.push('/dashboard')
  }
  const CampaignHandler = (e) => {
    e.preventDefault;
    Router.push('/campaign')
  }
  
  const LogoutHandler = e => {
    e.preventDefault;

  AxiosClient.post(`/logout/`)
    .then((response) => {
    console.log("logout handler", response)
    // Store.dispatch(syncActions.logout(response.data));
    removeCookie('token')
      Router.push('/')
  })
    .catch((err) => {
      if (err.status == 401) {
        error.config.headers['Authorization'] = 'Bearer ' + store.state.auth.token;
        getCookie('token')
      }
   });
    // removeCookie('token')
    // Router.push('/')    
  }
  const JobsHandler = e => {
    e.preventDefault
    Router.push('/jobs')
  }

    return <>
    <Sider collapsible collapsed={collapsed} onCollapse={(e) => setcollapsed(e)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />} onClick={ClickHandler} >
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />} onClick={CampaignHandler}>
            Campaign
            </Menu.Item>

              <SubMenu key="sub1" icon={<UserOutlined />} title="Settings" >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Teams">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="7">Team 2</Menu.Item>
              </SubMenu>
            <Menu.Item key="8" icon={<DesktopOutlined />} onClick={JobsHandler}>
              Jobs
            </Menu.Item>
            <Menu.Item key="9" icon={<DesktopOutlined />} onClick={LogoutHandler}>
              Logout
            </Menu.Item>
          
          </Menu>
            
        </Sider>

    </>
}

export default SiderBar