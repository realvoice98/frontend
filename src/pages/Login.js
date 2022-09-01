import React from "react";
import styled from "styled-components";
import { Text, Grid,  Input, Button } from "../elements";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configStore";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import * as S from './UserButtton/UserFormBtnEle';



const Login = (props) => {
    const REST_API_KEY = "46f056087e871bee8e632aab70ad7fc8"
    const REDIRECT_URI = "http://13.209.67.178:3000/kakaoLogin"
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const dispatch = useDispatch();
    const history = useHistory();
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const onClick = ()=>{
        login();
    }

    const onKeyPress = (e)=>{
        if(e.key == 'Enter'){
            onClick();
        }
    }
    const login = () => {
//입력 값 정합성 체크 후 login API 요청
        if (id === "" || pwd === "") {
            window.alert("아이디와 비밀번호를 입력해주세요.");
            return;
        }
        console.log(id)
        dispatch(userActions.loginDB(id, pwd));
    };
    return (
<>
        <Align>
            <Grid>

                <Line />
            </Grid>
            <Grid width="380px" margin="50px auto">
                <Text color='#DB631F' size="21px" >
                    SOME BODY HELP ME
                </Text>
                <Grid margin="18px 0">
                    <Input
                        _onChange={(e) => {
                            setId(e.target.value);
                        }}
                        width="380px"
                        height="45px"
                        placeholder="아이디"
                    />
                    <Input
                        onKeyPress={onKeyPress}
                        _onChange={(e) => {
                            setPwd(e.target.value);
                        }}
                        width="380px"
                        height="45px"
                        placeholder="비밀번호"
                        type="password"

                    />
                </Grid>
                <Button
                    _onClick={login}
                    margin="0 0 10px"
                    width="100%"
                    height="45px"
                    bg="#fbfbfb"
                    color="#282828"
                    border="1px solid #e7e7e7"

                >
                    로그인
                </Button>
                <S.KakaoBtn
                    onClick={()=>{
                    window.location.href = KAKAO_AUTH_URL;
                }}>
                카카오톡으로 로그인
                </S.KakaoBtn>
                <Button
                    width="100%"
                    height="45px"
                    bg="#F2AA4C"
                    color="#282828"
                    bold="false"
                    _onClick={(e) => {
                        history.push("/Signup");
                    }}
                >
                    회원가입
                </Button>

            </Grid>

        </Align>

    </>
    );
};

const Align = styled.div`
  text-align: center;
  justify-content: center;
  width: 460px;
  margin: 0 auto;
  font-family: Dotum, 돋움, Helvetica, "Apple SD Gothic Neo", sans-serif;
`;

const Line = styled.hr`
  border: solid 0.2px #ebebeb;
  align: center;
  width: 95%;
`;

const Ul = styled.ul`
  margin: 30px 0 0 0;
  padding: 0;
  list-style: none;
  height: 46px;
  width: 100%;
  & li {
    /* display:inline-block; */
    float: left;
    width: 50%;
    cursor: pointer;
  }
  & a {
    text-decoration: none;
    position: relative;
    height: 46px;
    line-height: 46px;
    text-align: center;
    display: block;
    color: rgb(64, 64, 64);
    font-size: 14px;
    border-bottom: 1px solid rgb(219, 219, 219);
    ${(props) =>
    props.seleted
        ? `border-color: rgb(255, 111, 97);
    color: rgb(255, 111, 97);`
        : ""}
  }
`;
// const FindID = styled.span`
//   font-size: 20px;
//   position:absolute;
//   transform: translateY(50%);
// `;

const Kakaoimg = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  margin : 10px auto ;
  width: 1300px;
  background-image: url('/images/kakao.png'');
  background-position: center;
`;


export default Login;