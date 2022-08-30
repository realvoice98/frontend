import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from "redux";
import {Provider} from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import store from "./redux/configStore";
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <Provider store={store}>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <BrowserRouter>
            <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
