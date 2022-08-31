import React, {useEffect, useState} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {useDispatch} from "react-redux";
import {getCookie, setCookie} from './shared/Cookie.js';
import {ConnectedRouter} from "connected-react-router";
import {history} from "./redux/configStore";
import './App.scss';
import Main from "./pages/Main/Main";
import {actionCreators as userActions} from "./redux/modules/user";
import Header from "./pages/Header";
import Survey from './pages/Survey/Survey'
import axios from "axios";
import {Signup} from "./pages/NavEle";
import DetailCategory from "./pages/DetailCategory";
import QuotationList from "./pages/QuotationList/QuotationList";
import GosuMain from "./pages/Gosu/GosuMain";
// import GosuSurvey from "./pages/Gosu/GosuSurvey";
import GosuSignUp from "./pages/Gosu/GosuSignUp";
import GosuDetail from "./pages/Gosu/GosuDetail/GosuDetail";
import { useHistory } from 'react-router-dom';
import ChatApp from "./pages/Chat/client/ChatApp";
import ChatList from "./pages/Chat/client/ChatList";
import GosuInfo from "./pages/Gosu/GosuQuotation/GosuInfo";
import GosuInfoDetail from "./pages/Gosu/GosuQuotationDetail/GosuInfo";
import Event from "./Event";
import KakaoLogin from "./pages/KakaoLogin";
function App(props) {
    const dispatch = useDispatch();
    const token = getCookie("access_token")
    const history =useHistory();

    useEffect(()=>{
        if(token) { //토큰이 존재하면 로그인을 유지 API 호출
            dispatch(userActions.loginCheckDB());
        }
    }
    , [])

    return (
        <>
        <React.Fragment>
        <Header />
        <ConnectedRouter history={history}>
            <Route path="/signin" exact component={Login}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/kakaoLogin" exact component={KakaoLogin}/>
            <Route path="/" exact component={Main}/>
            <Route path="/QuotationList" exact component={QuotationList}/>
            <Route path="/ChatApp" exact component={ChatApp}/>
            <Route path="/ChatApp/:id" exact component={ChatApp}/>
            <Route path="/ChatList" exact component={ChatList}/>
            <Route path="/GosuMain" exact component={GosuMain}/>
            <Route path="/GosuDetail" exact component={GosuDetail}/>
            <Route path="/user/subscribe" exact component={Event}/>
            <Route path="/GosuInfoDetail/:id" exact component={GosuInfoDetail}/>
            <Route exact path="/GosuInfo/:id" component={GosuInfo} />
            {/*<Route exact path="/lawsurvey" component={LawSurvey} />*/}
            <Route path="/Gosu/SignUp" exact component={GosuSignUp}/>
            <Route path="/category/" exact component={DetailCategory}/>
            <Route path="/category/:id" exact  component={DetailCategory}/>
            <Route exact path="/category/:id/survey" exact component={Survey} />
            <Route exact path="/category/:id/survey/:id" exact component={Survey} />
        </ConnectedRouter>
        </React.Fragment>
        </>

    );
}

export default App;
