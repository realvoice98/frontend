// 채팅창 구성하는곳
import React, { useEffect, useState } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import axios from 'axios';
import {getCookie} from '../../../shared/Cookie';
import { createAction } from 'redux-actions';
import { useParams } from 'react-router-dom';

function Chat({socket, gosu,user, room}) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList,setMessageList] = useState([]); // 상대방이 보낸 메시지 표시하기위한 변수
    let {id} = useParams();
    console.log(room)
    useEffect(()=>{
        axios.get(`/chat/sender/room/${id}`) // 데이터리스트 받아오기
            // axios.get('https://codingapple1.github.io/shop/data2.json')
            .then(function(res){
                console.log(res.data.info)
                let data = res.data.info
                data.splice(0,1)
                console.log(data)
                socket.emit("send_message",...data);
                setMessageList((list)=>[...list,...data]);
                setCurrentMessage("");
            });
    },[]) // 첫 렌더링 됐을때 그동안 채팅기록 불러오기


    const sendMessage = async() => {

        if (currentMessage !== ""){ // 메시지가 비어있지않
            const messageData = {
                msg : currentMessage,
                user : user,
                gosu : gosu,
                room : room,
                createdAt: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),

            };


            await socket.emit("send_message",messageData);
            setMessageList((list)=>[...list,messageData]);
            setCurrentMessage("");



            //fetch('/chat/insert',{
            //  method: 'POST',
            //  headers: {
            //      Authorization:getCookie('is_login'),
            //  },
            //  body: JSON.stringify({
            //  messageData,
            //  }),
            //}).then(res => res.json())
            //.then((res)=>{
            //  console.log(res)
            //})
            axios
                .post('/chat/insert', {
                    room : messageData.room,
                    info : [{msg : messageData.msg,
                        gosu : messageData.gosu,
                        user : messageData.user,
                        createdAt : messageData.createdAt}]
                })
                .then(function(res){
                    console.log(res);
                    console.log(messageData);
                })
                .catch(function(error){
                    console.log(error);
                });

        }
    }

    useEffect(()=>{
        socket.on("receive_message",(data)=>{
            setMessageList((list)=>[...list,data]) //data->...data수정
        })
    },[socket])

    return (
        <div className='chat-window'>
            <div className='chat-header'>
                { localStorage.getItem('role') == 'ROLE_USER' ?
                    <p>고수와 채팅</p>
                    :
                    <p>유저와 채팅</p>
                }
            </div>
            <div className='chat-body'>
                <ScrollToBottom className='message-container'>
                    {messageList.map((messageContent,i)=>{
                        // return <div className='message' id ={username === messageContent.author ? "you" : "other"}>
                        return <div className='message' id ={
                            messageContent.gosu == localStorage.getItem('nickname') || messageContent.user == localStorage.getItem('nickname') ? "you" : "other" }>

                            {/* 여기서 아이디값주는 이유는 css 적용 */}
                            <div>
                                <div className='message-content'>
                                    <p>{messageContent.msg}</p>
                                </div>
                                <div className='message-meta'>
                                    <p id="time">{messageContent.createdAt}</p>
                                    {messageContent.gosu != null?
                                        (<p id="gosu">{messageContent.gosu}</p>)
                                        :
                                        (<p id="user">{messageContent.user}</p>)
                                    }

                                </div>
                            </div>
                        </div>
                    })}
                </ScrollToBottom>
            </div>
            <div className='chat-footer'>
                <input type="text"
                       value={currentMessage}
                       placeholder='Hey...'
                       onChange={
                           (event)=>{
                               setCurrentMessage(event.target.value)}}
                       onKeyPress={(event)=>{
                           event.key ==="Enter" && sendMessage()}}
                />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    )
}

export default Chat