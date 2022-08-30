import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import GosuMainSection from './GosuMainSection/GosuMainSection';
import {getCookie} from "../../../shared/Cookie";
// import GosuAsideBar from './GosuAsideBar/GosuAsideBar';

function GosuInfo() {
    const params = useParams();
    const {id} = params;
    useEffect(() => {
        fetch(`/quotation/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('is_login'),
            },
            body: JSON.stringify(
                {email: localStorage.getItem('email')}
            )
        })
            .then(res => res.json())
            .then(res => {
                setGosuDetails(res)
                console.log(res)

            });
    }, []);
    var [introduction,setIntroduction]=useState('')
    var [quotationPrice,setQuotationPrice]=useState('')
    var [gosuDetails, setGosuDetails] = useState(''
        // GosuName:'윈터',
        // GosuAge:'28',
        // GosuGender:'남',
        // GosuCategory:'편의점 알바',
        // GosuRegion:'서울',
        // GosuCareer:'20년',
        // name:'winter', // // 고수가 가입햇을때 저장된 이름
        // age : '27',
        // category:'서빙', // 고수가 가입햇을때 저장된 서비스
        // gender:'여', //평균 별점
        // introduction, // 이건 예외 너가 보내주는 데이터 X 작성할 한줄 소개
        // quotationPrice, //이건 예외 너가 보내주는 데이터 X 작성할 견적서 가격
        // carrer:'10',  // 고수가 가입했을때 저장된 경력
        // region:'서울', // 고수가 가입했을때 저장된 지역
    );
    const [gosuInfo, setGosuInfo] = useState([{name:'윈터',
        rating:4,
    created_at:2022,
    content:'???'},{name:'윈터',
        rating:4,
        created_at:2022,
        content:'???'},{name:'윈터',
        rating:4,
        created_at:2022,
        content:'???'}]);



    const submitForm = () => {
        fetch(`/quotationSubmit/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getCookie('is_login'),
            },
            body: JSON.stringify({
                gosuEmail:localStorage.getItem('email'),
                introduction:introduction,
                quotationPrice:quotationPrice,
            }),
        })
            .then(res => res.json())
            // .then(goToFindGosu());
            .then((res)=>{
                window.location.href='/';
                console.log(res)
            })
    };

    console.log(introduction);
    console.log(quotationPrice);
    // console.log(`gosuDetails`, gosuDetails);
    return (
        <GosuDetailContainer>
            {Object.keys(gosuDetails).length && (
                <>
                    <GosuMainSection
                        gosuDetails={gosuDetails}
                        gosuInfo={gosuInfo}
                        introduction={introduction}
                        setIntroduction={setIntroduction}
                        quotationPrice={quotationPrice}
                        setQuotationPrice={setQuotationPrice}
                    />
                    {/*<GosuAsideBar*/}
                    {/*    gosuDetails={gosuDetails}*/}
                    {/*    quotationForm={quotationForm}*/}
                    {/*/>*/}
                </>
            )}
            <ReviewMoreBtn onClick={()=>{
                submitForm();
            }}>제출하기</ReviewMoreBtn>
        </GosuDetailContainer>
    );
}

const GosuDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
`;
const ReviewMoreBtn = styled.button`
  padding: 13px 30px;
  border: 1px solid #dbdbdb;
  border-radius: 40px;
  background-color: orange;
  color: rebeccapurple;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  margin-top : 900px;
  &:hover {
    background-color: rebeccapurple;
    color: white;
  }
`;
export default GosuInfo;