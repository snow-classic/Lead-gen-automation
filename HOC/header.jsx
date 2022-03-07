import styled from "styled-components"
import { Button } from 'antd';
import { useRouter } from "next/router";
import {removeCookie} from "../actions/auth"
const Wrapper = styled.div`
    background:#282A35;
    height:44px;
    color:#fff;
    text-align:right;  
`;


function Header() {
      const router = useRouter();


    const buttonHandler = () => {
        removeCookie('token')
       router.push('/')
   }

    return <Wrapper>
        <Button type="text" style={{ color: '#fff' }} onClick={buttonHandler }>Log Out</Button>
    </Wrapper>
}
export default Header