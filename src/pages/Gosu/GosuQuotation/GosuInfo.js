import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ChatApp from '../../Chat/client/ChatApp'
import GosuMainSection from './GosuMainSection/GosuMainSection';
import {getCookie} from "../../../shared/Cookie";
// import GosuAsideBar from './GosuAsideBar/GosuAsideBar';


function GosuInfo() {
    const params = useParams();
    const {id} = params;
    useEffect(() => {
        fetch(`/matchedgosulist/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('access_token'),
            },
            body: JSON.stringify(
                {email: localStorage.getItem('email')}
            )
        })
            .then(res => res.json())
            .then(res => {
                setGosuDetails(res)
                console.log(res);
                localStorage.setItem('email2',res.gosuEmail);

            });
    }, []);
    // var [introduction,setIntroduction]=useState('안녕하세요 윈터 입니다.')
    const [gosuDetails, setGosuDetails] = useState({
        // review_counts:4,
        // uploaded_image:'/images/winter8.jpg',
        // profile_image:'/images/winter9.png',
        // name:'winter',
        // main_service:'서빙',
        // average_rating:5,
        // introduction:'안녕하세요 에스파 윈터 입니다!',
        // quotationPrice:'100,000원',
        // career:'10',
        // region:'서울',
        // hired:'30',
        // certification:'ok',
        // business:'ok',
        // category:'서빙', // 고수가 가입햇을때 저장된 서비스
        // gosuName:'윈터',
        // gosuAge:'28',
        // gosuGender:'남',
        // gosuCategory:'편의점 알바',
        // gosuRegion:'서울',
        // gosuCareer:'20년',
    });
    console.log(`gosuDetails`, gosuDetails);
    return (
        <GosuDetailContainer>
            {Object.keys(gosuDetails).length && (
                <>
                    <GosuMainSection
                        gosuDetails={gosuDetails}
                    />
                    {/*<GosuAsideBar*/}
                    {/*    gosuDetails={gosuDetails}*/}
                    {/*    quotationForm={quotationForm}*/}
                    {/*/>*/}
                </>
            )}
            <ReviewMoreBtn  onClick={()=>{
                fetch(`/chat/new`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: getCookie('access_token'),
                    },
                    body: JSON.stringify({
                        user:localStorage.getItem('email'),
                        gosu:localStorage.getItem('email2'),
                    }),
                })
                    .then(res => res.json())
                    // .then(goToFindGosu());
                    .then((res)=>{
                        console.log(res)
                        console.log('보내기 성공 ')
                        let number = res.room;
                        localStorage.setItem('room',number);
                        window.location.href='/ChatApp'
                        // setRoom(room)
                    });

            }}>상담하기</ReviewMoreBtn>

        </GosuDetailContainer>
    );
}
const ReviewMoreBtn = styled.button`
  padding: 13px 30px;
  border: 1px solid #dbdbdb;
  border-radius: 40px;
  background-color: orange;
  color: rebeccapurple;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  margin-top : 550px;
  &:hover {
    background-color: rebeccapurple;
    color: white;
  }
`;
const GosuDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
`;

export default GosuInfo;