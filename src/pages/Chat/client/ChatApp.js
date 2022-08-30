import './ChatApp.css';
import io from 'socket.io-client'
import {useEffect, useState} from 'react';
import Chat from './Chat';
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import {actionCreators as userActions} from "../../../redux/modules/user";
import {getCookie} from "../../../shared/Cookie";
import {useParams} from "react-router-dom";
const socket = io.connect("http://13.209.67.178:3001")

function ChatApp({number}) {
    const [room, setRoom] = useState();
    let {id} = useParams();
    console.log(id)
    useEffect(()=>{
        getInfo();
    },[])
    const getInfo = () =>{
        if(localStorage.getItem('role')=='ROLE_GOSU'){
            localStorage.setItem('room',id)
        }else if(localStorage.getItem('role')=='ROLE_USER' && localStorage.getItem('room') == null){
            localStorage.setItem('room',id)
        }  // 만약 로컬스토리지안에 있는 사람의 역할이 고수라면 {id}의 값을 로컬스토리지에 넣어주세요
        setRoom(localStorage.getItem('room'))
    }
    // const user_info = useSelector((state)=>state.user.user);
    // var sender = localStorage.getItem('email');
    const role = localStorage.getItem('role');
    console.log(room);
    var gosu;
    var user;
    if (role =='ROLE_HELPER'){
        gosu=localStorage.getItem('nickname');
    }else{
        user=localStorage.getItem('nickname');
    }

    useEffect(()=>{
        joinRoom()
    },[room]);

    const joinRoom = () =>{
        if(gosu !== "" && room !== ""){
            socket.emit("join_room", room);
        }
    } // 유저이름이 있고, 방이름이 있을때만 동작

    return (
        <>
            {
                role ==`ROLE_HELPER`?(
                    <Chat socket={socket} gosu={gosu} room={room}/>
                ):(
                    <Chat socket={socket} user={user} room={room}/>
                )
            }

        </>
    );
}

export default ChatApp;