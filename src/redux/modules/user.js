import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie, setCookie, deleteCookie } from "../../shared/Cookie";
import axios from "axios";
import {actionCreators as userActions} from './user'
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

//Action
const SET_USER = "SET_USER";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";

//initialState
const initialState = {
    user: null,
    access_token: false,
};

//Action Creator
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
//middlewatr actions

//API통신을 통해 서버에 id,pwd를 제공하고 유저 정보와 토큰을 받아 저장
const loginDB = (id, password) => {
    return function (dispatch, getState, { history }) {
        axios({
            method: "post",
            url: "/user/signin",
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: {
                email: id,
                password: password,
            },
        })
            .then((res) => {
                console.log(res)
                console.log(id);
                console.log(res)
                // dispatch(
                //     setUser({
                //         email: id,
                //         nickname: id,
                //     })
                // );
                // console.log(res.data.token)
                const access_token = res.headers.access_token;
                const refresh_token = res.headers.refresh_token;
                console.log('성공')
                // 토큰을 헤더 디폴트 값으로 설정
                axios.defaults.headers.common[
                  "Authorization"
                ] = `Bearer ${access_token}`;
                // axios.defaults.headers.common[
                //     "Authorization"
                //     ] = `Bearer ${refresh_token}`;
                //로컬에 사용자 정보 저장  email,nickname,role
                console.log(axios.defaults.headers.common)
                //쿠키에 토큰 저장
                setCookie("access_token", res.headers.access_token);
                setCookie("refresh_token", res.headers.refresh_token);
                document.location.href = "/";
                // history.push("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

//로그인 유지 API
//클라이언트 쿠키 저장소에 토큰이 존재하는 경우
//서버에서 토큰을 받아 유효성 검증 후 유효하다면 유저 정보를 주어 자동 로그인
const loginCheckDB = () => {
    return function (dispatch, getState, { history }) {
        const token = getCookie("access_token");
        axios({
            method: "get",
            url: "/user/check",
            headers: {

                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                console.log(res);
                console.log()
                localStorage.setItem('email',res.data.email)
                localStorage.setItem('nickname',res.data.name)
                localStorage.setItem('role',res.data.role)
                dispatch(
                    setUser({
                        email: res.data.email,
                        nickname: res.data.name,
                        role : res.data.role,
                    })
                );
            })
            .catch((err) => {
                const str = 'Token'
                if (err.response.headers.error.startsWith(str)) {
                    const token = getCookie("refresh_token");
                    axios({
                        method: "get",
                        url: "/user/token/refresh",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }).then((res)=>{
                        setCookie("access_token", res.headers.access_token);
                        setCookie("refresh_token", res.headers.refresh_token);
                        dispatch(userActions.loginCheckDB());
                    }).catch((err) => {
                        console.log('로그아웃 (토큰을 잘못 받아옴)')
                        dispatch(userActions.logOut());
                        history.replace("/");
                    })
                }
                else {
                    console.log('만료가 아닌, 조작 or 알수없는 이유')
                    dispatch(userActions.logOut());
                    history.replace("/");
                }

                    }
                );
            };
    };






const logoutDB = () => {
    return function (dispatch, getState, { history }) {
        dispatch(logOut());
        document.location.href='/'
        //replace는 push와 달리 뒤로가기해도 원래 페이지가 나오지 않음.
    };
};
//reducer
//produce (immer) 이용하여 불변성 유지
export default handleActions(
    {
        [SET_USER]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user;
                draft.access_token = true;
            }),
        [LOG_OUT]: (state, action) =>
            produce(state, (draft) => {
                deleteCookie("access_token");
                deleteCookie("refresh_token");
                draft.user = null;
                draft.access_token = false;
            }),
        [GET_USER]: (state, action) => produce(state, (draft) => {}),
    },
    initialState
);



const actionCreators = {
    logOut,
    getUser,
    loginDB,
    // signUpDB,
    loginCheckDB,
    logoutDB,
};

export { actionCreators };
