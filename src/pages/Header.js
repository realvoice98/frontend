
import React, {useState,useEffect} from "react";
import styled from "styled-components";
import { Grid, Text, Input } from "../elements";
import { history } from "../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
// import Nav from "./Nav";
import { getCookie } from "../shared/Cookie";
import * as S from './NavEle';
import {IoIosArrowDown} from "react-icons/all";
import UserMy from './UserMy/UserMy';
import {useHistory} from "react-router-dom";



const Header = (props) => {
    // const [quotationUsers, setQuotationUsers] = useState([]);
    const dispatch = useDispatch();
    const user_info = useSelector((state) => state.user.user);
    const is_login = getCookie("is_login");
    const [isUserMyOpen, setIsUserMyOpen] = useState(false);
    const history = useHistory();
    // if ( //로그인, 회원가입 화면에서는 헤더를 보여주지 않음.
    //     window.location.pathname === "/signin"
    //     // window.location.pathname === "/signup"
    // )
    //     return null;
    // if ( //로그인, 회원가입 화면에서는 헤더를 보여주지 않음.
    //     window.location.pathname === "/test"
    //
    //     // window.location.pathname === "/signup"
    // )
    //     return null;

    const userMyOpen = () => {
        setIsUserMyOpen(!isUserMyOpen);
    };
    // useEffect(() => {
    //     getQuotationList();
    // }, []);
    // const getQuotationList = () => {
    //     fetch(`/quotations`, {
    //         method: 'GET',
    //         headers: {
    //             Authorization: localStorage.getItem('access_token'),
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             setQuotationUsers(res);
    //         });
    // };



    return (
        <>
            <S.NavContainer>
                <S.Navbar>
                    <S.NavLeft>
                        <S.LogoBox>
                            <S.HomeLink>
                                <S.LogoImg onClick={()=>{
                                    document.location.href ='/'
                                }} src='/images/logo.png' alt="logo" />
                            </S.HomeLink>
                        </S.LogoBox>

            <S.MenuBox>
                <S.MenuList onClick={()=>{
                    window.location.href='/QuotationList'
                    // history.push('/QuotationList')
                }} >견적보기</S.MenuList>
                <S.MenuList>전문가 찾기</S.MenuList>
            </S.MenuBox>
                    </S.NavLeft>
                    <S.UserBox>
                        {user_info ? (
                            <>

                                <S.UserImgBox>
                                    {
                                        window.location.pathname !='/ChatApp'?(
                                        <S.MenuList style={{marginRight:'40px'}} onClick={()=>{

                                            window.location.href='/ChatList';
                                        }}>채팅</S.MenuList>):null
                                    }

                                    <S.UserImg src='/images/111111.jpg' alt='user1'></S.UserImg>
                                </S.UserImgBox>
                                <S.User
                                    onClick={userMyOpen}
                                >
                                    <S.UserName>
                                        {user_info.nickname}님
                                    </S.UserName>
                                    <IoIosArrowDown className="userIcons" />
                                </S.User>

                                <span style={{ margin: "0 13px" }}></span>
                                {
                                    isUserMyOpen  == true ? <UserMy /> : null
                                }
                            </>

                        ) : (
                            <>
                                <S.UserImgBox>
                                    <S.MenuList onClick={()=>{
                                        window.location.href='/GosuMain'
                                    }} style={{marginRight:'40px'}}>전문가 가입</S.MenuList>
                                </S.UserImgBox>
                                <S.Login
                                    style={{ textDecoration: "none", cursor: "pointer" }}
                                    onClick={() => {
                                        document.location.href = "/signin";
                                    }}
                                >
                                    로그인
                                </S.Login>
                                <span style={{ margin: "0 13px" }}></span>
                            </>
                        )}
                        {user_info ? (
                            <>
                                <S.Login
                                    onClick={() => {
                                        dispatch(userActions.logOut());
                                        document.location.href="/";
                                    }}
                                >
                                    로그아웃
                                </S.Login>
                                <span style={{ margin: "0 13px" }}></span>
                            </>
                        ) : (
                            <>
                                <S.Signup
                                    style={{ textDecoration: "none", cursor: "pointer" }}
                                    onClick={() => {
                                        document.location.href = "/signup";
                                    }}
                                >
                                    회원가입
                                </S.Signup>
                                <span style={{ margin: "0 13px" }}></span>
                            </>
                        )}
                    </S.UserBox>
                    </S.Navbar>

                    </S.NavContainer>


        </>
    );
};

export default Header;
