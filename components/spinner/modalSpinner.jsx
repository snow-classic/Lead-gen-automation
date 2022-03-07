import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components'


const Wrapper = styled.div`
  left: 55%;
  margin-left: -4em;
  z-index: 99999;
  position:absolute;
  margin-top:15%;
`;


const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />;


function Spinner() {
    return <Wrapper><Spin indicator={antIcon} /></Wrapper>
}

export default Spinner