import React from 'react';
import {useLocation} from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";


function KakaoLogin() {
    const location = useLocation();
    const KAKAO_CODE = location.search.split('=')[1];
    console.log(KAKAO_CODE)
    fetch(`/kakao/${KAKAO_CODE}`, {
        method:'GET',
        // body: JSON.stringify({
        //     access: KAKAO_CODE,
        // }),
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            const access_token = res.headers.access_token;
            const refresh_token = res.headers.refresh_token;
            console.log('성공')
            // 토큰을 헤더 디폴트 값으로 설정
            axios.defaults.headers.common[
                "Authorization"
                ] = `Bearer ${access_token}`;
            setCookie("access_token", res.headers.access_token);
            setCookie("refresh_token", res.headers.refresh_token);
            document.location.href = "/";
        })
        .catch((error) => {
            console.log(error);
        });

    return (
    <Container>
        <TextBox>
            {/*<H1>{KAKAO_CODE}</H1>*/}
            <H1>카카오톡 로그인중 입니다!!~</H1>
            <TextImg src="/images/4.jpg" alt="winter" />
        </TextBox>
        <Loader>
            <Outer />
            <Middle />
            <Inner />
            <Dot />
        </Loader>
    </Container>

    );
}

export default KakaoLogin;

const loading = keyframes`
    0% { transform : rotate(0deg)}
    100% { transform : rotate(360deg)}
`;
const jumping = keyframes`
    0% { transform : translateY(0)}
    50% { transform : translateY(-5px)}
    100% { transform : translateY(0)}
  `;

const Container = styled.div`
  ${({ theme }) => theme.flex('space-around', 'center', 'column')}
  height: 400px;
`;
const TextBox = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)}
`;
const TextImg = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  animation: ${jumping} 1s linear infinite;
`;
const H1 = styled.h1`
  font-size: 25px;
`;

const Loader = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;
const Outer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-left: 5px solid #eb4d4d;
  border-right: 5px solid #eb4d4d;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: ${loading} 1s linear infinite;
`;
const Middle = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  bottom: 30px;
  right: 30px;
  border-left: 5px solid rebeccapurple;
  border-right: 5px solid rebeccapurple;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: ${loading} 1s linear infinite reverse;
`;
const Inner = styled.div`
  position: absolute;
  top: 60px;
  left: 60px;
  bottom: 60px;
  right: 60px;
  border-left: 5px solid #fae4ad;
  border-right: 5px solid #fae4ad;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: ${loading} 1s linear infinite;
`;
const Dot = styled.div`
  position: absolute;
  top: 90px;
  bottom: 90px;
  left: 90px;
  right: 90px;
  background-color: rebeccapurple;
  border-radius: 50%;
`;