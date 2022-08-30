import React from 'react';
import styled from 'styled-components';

import { BiUser } from 'react-icons/bi';
import { AiOutlineTrophy } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
import { BiBriefcaseAlt2 } from 'react-icons/bi';
import { GrDocumentText } from 'react-icons/gr';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import {Box, TextField} from "@mui/material";

function GosuInfoBox({ introduction,setIntroduction,quotationPrice,setQuotationPrice, gosuDetails, handleMoreBtn, closed }) {
    const {
        name,
        email,
        age,
        category,
        gender,
        career,
        region,
    } = gosuDetails;

    const basicLists = [
        {
            icon: <BiUser />,
            text: '본인인증',
        },
        {
            icon: <AiOutlineTrophy />,
            text: `10회 고용됨`,
        },
        {
            icon: <GrLocation />,
            text: `서울특별시 ${region}`,
        },
    ];
    // <ul>유저의 요청 카테고리 : 편의점알바</ul>
    // <ul>유저의 이메일 : wijang777@naver.com</ul>
    // <ul>유저가 원하는 성별 : 남</ul>
    // <ul>유저가 원하는 나이 : 20</ul>
    // <ul>유저가 원하는 지역 : 서울</ul>
    // <ul>유저가 원하는 경력 : 10년</ul>
    return (
        <GosuInfoContainer>
            <GosuIntroduce2>
                <h2>{name}</h2>
                <GosuQuestion>유저의 요청 카테고리 : {category}</GosuQuestion>
                <GosuQuestion>유저의 이메일 : {email} </GosuQuestion>
                <GosuQuestion>유저가 원하는 성별 : {gender}</GosuQuestion>
                <GosuQuestion>유저가 원하는 나이 : {age}</GosuQuestion>
                <GosuQuestion>유저가 원하는 지역 : {region}</GosuQuestion>
                <GosuQuestion>유저가 원하는 경력 : {career}</GosuQuestion>
            </GosuIntroduce2>

            <GosuIntroduce>
                <h2>견적 결과 가격</h2>
                <TextField
                    color = 'warning'
                    onChange={(e)=>{
                    setQuotationPrice(e.target.value)
                }} id="outlined-basic" label="견적 총 예상 가격" variant="outlined" />
            </GosuIntroduce>
            <GosuIntroduce>
                <h2>한줄소개</h2>
                <Box
                    sx={{
                    width: 1000,
                    maxWidth: '100%',
                }}
                    >
                <TextField
                    color = 'warning'
                    onChange={(e)=>{
                    setIntroduction(e.target.value)
                }} fullWidth label="소개 간단히 적어주세요~" id="fullWidth" />
            </Box>
            </GosuIntroduce>
            <GosuBasicInfo>
                <h2>기본정보</h2>
                <ul>
                    {basicLists.map((basicList, i) => {
                        return (
                            <li key={i}>
                                {basicList.icon}
                                <span>{basicList.text}</span>
                            </li>
                        );
                    })}
                </ul>
            </GosuBasicInfo>
            <GosuAddedInfo>
                <h2>추가정보</h2>
                <AddedInfo>
                    <li>
                        <BiBriefcaseAlt2 />
                        <span>경력 {career}년</span>
                    </li>
                    <li>
                        <GrDocumentText />
                        <span>사업자등록증 등록완료</span>
                    </li>
                    <li>
                        <AiOutlineSafetyCertificate />
                        <span>자격증 등록완료</span>
                    </li>
                </AddedInfo>
            </GosuAddedInfo>

            <GosuService>
                <h2>확인 완료</h2>
                <ServiceDetailBox>
                    {/*<DetailText>*/}
                    {/*    <p className={closed.desc ? '' : 'close'}>{description}</p>*/}
                    {/*</DetailText>*/}
                    {/*<ViewMoreBox>*/}
                    {/*    <ViewMoreBtn*/}
                    {/*        name="desc"*/}
                    {/*        onClick={e => handleMoreBtn(e.target.name)}*/}
                    {/*    >*/}
                    {/*        {closed.desc ? '접기' : '더보기'}*/}
                    {/*    </ViewMoreBtn>*/}
                    {/*</ViewMoreBox>*/}
                </ServiceDetailBox>
            </GosuService>
        </GosuInfoContainer>
    );
}
const FaqCard = styled.li`
margin: 30px 0;
`;

const GosuInfoContainer = styled.section`
  border-bottom: 1px solid #dbdbdb;
  h2 {
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: 500;
  }
  p,
  li {
    padding-bottom: 10px;
    color: #737373;
  }
`;

const GosuIntroduce = styled.div`
  padding: 50px 0 10px 0;
`;
const GosuIntroduce2 = styled.div`
  padding: 50px 0 10px 0;
  border-bottom: 1px solid #dbdbdb;
  
`;

const GosuBasicInfo = styled.div`
  float: left;
  width: 60%;
  padding-bottom: 30px;
  li {
    padding-bottom: 20px;
    span {
      margin-left: 10px;
    }
  }
`;

const GosuAddedInfo = styled.div`
  float: left;
  width: 40%;
  padding-bottom: 30px;
`;

const AddedInfo = styled.ul`
  li {
    padding-bottom: 20px;
  }
  span {
    margin-left: 10px;
  }
`;

const GosuOffer = styled.div`
  display: inline-block;
  width: 100%;
  padding-bottom: 60px;
`;

const ServiceBox = styled.div``;

const ServiceList = styled.ul`
  li {
    display: inline;
    padding: 10px 15px;
    border: 1px solid #dbdbdb;
    border-radius: 30px;
    text-align: center;
    & + li {
      margin-left: 10px;
    }
  }
`;

const GosuService = styled.div`
  padding-bottom: 60px;
`;

const ServiceDetailBox = styled.div``;

const DetailText = styled.div`
  max-height: 200px;
  p {
    max-height: 100%;
    line-height: 37px;
  }
  p.close {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const ViewMoreBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
`;

const ViewMoreBtn = styled.button`
  border: none;
  background-color: transparent;
  color: rebeccapurple;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
const GosuQuestion = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export default GosuInfoBox;