import * as React from 'react';
import './ChatApp.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from 'styled-components';
import { useState,useEffect } from 'react';
import {useHistory} from "react-router-dom";
import ScrollToBottom from 'react-scroll-to-bottom';
import axios from 'axios';
import { AiOutlineMessage } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";


export default function ChatList() {
    const [value, setValue] = useState('one');
    const history = useHistory();
    let [chatList,setChatList] = useState([]);

    const email = localStorage.getItem('email'); // 수정해야할듯 ?
    const role = localStorage.getItem('role');
    const nickname = localStorage.getItem('nickname');
    //
    useEffect(()=>{
        console.log(email,role)
        axios.get(`/chat/list/${email}/${role}`)
            .then(function(res){
                    console.log(res)
                    let data = res.data
                    setChatList((list)=>[...list, ...data]);

                }
            )
            .catch((error)=>console.log(error))
    },[])


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab label={< AiOutlineMessage size={24}/>} />
                <Tab label={<BsHeart size={24}/>} />
                <Tab label={<AiOutlineExclamationCircle size={24}/>} />
            </Tabs>
            <ScrollToBottom className='message-container'>
                {
                    chatList.map((a,i)=>{
                        return(
                            <List onClick={()=>{history.push(`/ChatApp/${a.room}`)}}>
                                {localStorage.getItem('role') == 'ROLE_USER'
                                    ?
                                    <Name>{a.gosu}</Name>
                                    :
                                    <Name>{a.user}</Name>}
                                <Msg>{a.info[0].msg}</Msg>
                                {/* res.data[i].info[i].msg */}
                                <hr></hr>
                            </List>
                        )
                    })

                }
            </ScrollToBottom>
        </Box>
    );

}

const Box = styled.div`
position: absolute;
width:500px;
height:300px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%)
`;

const List = styled.div`
margin-top:30px;

`

const Name = styled.div`
margin-left : 40%;
font-size : 30px;
width : 30%
margin-bottom : 30px;
margin-top : 20px;
`

const Msg = styled.div`
margin-left : 30%;
font-size : 20px;
width : 30%
margin-bottom : 10px;
margin-top : 30px;
color:grey;
`