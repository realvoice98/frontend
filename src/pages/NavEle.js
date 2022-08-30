import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  ${({ theme }) => theme.flex('center', 'center', null)};
  font-family: 'Noto Sans KR', sans-serif;
  margin-bottom: 20px;
`;

export const Navbar = styled.div`
  ${({ theme }) => theme.flex('space-between', 'center', null)};
  position: relative;
  width: 100%;
  max-width: 1200px;
  padding: 0px 0;
  
`;

export const NavLeft = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)};
`;

export const LogoBox = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)};
  width: 140px;
  height: 100%;
  margin: 0 30px;
`;

export const HomeLink = styled(Link)`
  /*  */
`;

export const LogoImg = styled.img`
  width: 100px;
  cursor: pointer;
 
  
`;

export const MenuBox = styled.ul`
  ${({ theme }) => theme.flex('center', 'center', null)};
`;

export const MenuList = styled(Link)`
  margin: 0 10px;
  color: #F2AA4C;
  font-size: 28px;
  text-decoration: none;
  cursor: pointer;
  font-family: GamjaFlower-Regular;
  
  &:hover {
    color: #323232;
    font-weight: bold;
    font-family: GamjaFlower-Regular;
  }
`;

export const UserBox = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)};
`;

export const Button1 = styled.button`
  background-color: transparent;
  color: #323232;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
`;

export const Login = styled(Button1)`
margin: 0 10px;
color: #F2AA4C;
  font-size: 28px;
  text-decoration: none;
  cursor: pointer;
  font-family: GamjaFlower-Regular;
  &:hover {
    color: #323232;
    font-weight: bold;
  }`;

export const Signup = styled(Button1)`
margin: 0 10px;
  color: #F2AA4C;
  font-size: 28px;
  text-decoration: none;
  cursor: pointer;
  font-family: GamjaFlower-Regular;
  &:hover {
    color: #323232;
    font-weight: bold;
  }
  margin: 0 30px;
`;
export const UserImgBox = styled.div`
  ${({ theme }) => theme.flex(null, 'center', null)};
`;
export const UserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  object-fit: cover;
  cursor: pointer;
`;
export const User = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)};
  margin: 0 20px;
  .userIcons {
    margin: 0 10px 2px;
    color: #aaa;
    cursor: pointer;
  }
`;
export const UserName = styled.p`
  color: #F2AA4C;
  font-size: 25px;
  cursor: pointer;
  font-family: GamjaFlower-Regular;
  text-shadow: -0.5px 0px grey, 0px 0.5px grey, 0.5px 0px grey, 0px -0.5px grey;
`;