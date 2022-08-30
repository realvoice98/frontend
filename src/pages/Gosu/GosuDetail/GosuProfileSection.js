import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import UploadImage from './UploadImage';
import GosuProfileReview from './GosuProfileReview';
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill";
import { BsStarHalf } from "@react-icons/all-files/bs/BsStarHalf";
import { IoCheckmarkCircle } from  "@react-icons/all-files/io5/IoCheckmarkCircle"
import { IoCheckmarkCircleOutline} from  "@react-icons/all-files/io5/IoCheckmarkCircleOutline"

function GosuProfileSection() {
  // const {
  //   profile_image,
  //   average_rating,
  //   review_counts,
  //   hired,
  //   name,
  //   main_service,
  //   introduction,
  //   region,
  //   career,
  //   certification,
  //   business,
  //   description,
  //   uploaded_image,
  // } = gosuProfileValue;
  // console.log(`object`, uploaded_image);

  return (
    <GosuProfileWrapper>
      <GosuProfileSummary>
        <ProfileImgBox>
          <UploadImage />
        </ProfileImgBox>
        <GosuSummaryBox>
          <GosuStatisticsBox>
            <Statistics>
              <ReviewData>Test</ReviewData>
              <h3>리뷰 평점</h3>
            </Statistics>
            <Statistics>
              <ReviewData>Test1</ReviewData>
              <h3>리뷰 수</h3>
            </Statistics>
            <Statistics>
              <ReviewData>Test2</ReviewData>
              <h3>고용 수</h3>
            </Statistics>
          </GosuStatisticsBox>
          <GosuSummaryBtns>
            <AnalysisBtn>활동분석</AnalysisBtn>
            <PreviewBtn>미리보기</PreviewBtn>
          </GosuSummaryBtns>
        </GosuSummaryBox>
      </GosuProfileSummary>
      <GosuTitleNameBox>
        <TitleNameBar>
          <h2>이름</h2>
          <EditValueBtn>수정</EditValueBtn>
        </TitleNameBar>
        <TitleValue>홍길동</TitleValue>
      </GosuTitleNameBox>
      <GosuTitleNameBox>
        <TitleNameBar>
          <h2>대표서비스</h2>
          <EditValueBtn>수정</EditValueBtn>
        </TitleNameBar>
        <TitleValue></TitleValue>
      </GosuTitleNameBox>
      <GosuTitleNameBox>
        <TitleNameBar>
          <h2>한줄소개</h2>
          <EditValueBtn>수정</EditValueBtn>
        </TitleNameBar>
        <TitleValue></TitleValue>
      </GosuTitleNameBox>
      <GosuTitleNameBox>
        <TitleNameBar>
          <h2>본인 인증</h2>
          <IoCheckmarkCircle color="green" size="22" />
        </TitleNameBar>
      </GosuTitleNameBox>
      <GosuTitleNameBox>
        <TitleNameBar>
          <h2>활동 지역</h2>
          <EditValueBtn>수정</EditValueBtn>
        </TitleNameBar>
        <TitleValue>서울</TitleValue>
      </GosuTitleNameBox>
      <GosuTitleNameBox>
        <TitleNameBar>
          <h2>경력</h2>
          <EditValueBtn>수정</EditValueBtn>
        </TitleNameBar>
        <TitleValue>년</TitleValue>
      </GosuTitleNameBox>
      <GosuTitleNameBox>
        <TitleNameBar>
          <h2>사업자등록증 등록</h2>
          {/* {business ? (
            <IoCheckmarkCircle color="green" size="25" />
          ) : (
            <IoCheckmarkCircleOutline color="grey" size="25" />
          )} */}
        </TitleNameBar>
      </GosuTitleNameBox>
      <GosuTitleNameBox>
        <TitleNameBar>
          <h2>자격증 등록</h2>
          {/* {certification ? (
            <IoCheckmarkCircle color="green" size="25" />
          ) : (
            <IoCheckmarkCircleOutline color="grey" size="25" />
          )} */}
        </TitleNameBar>
      </GosuTitleNameBox>
      <GosuTitleNameBox>
        <TitleNameBar>
          <h2>고수 서비스 상세설명</h2>
          <EditValueBtn>수정</EditValueBtn>
        </TitleNameBar>
        <TitleValue></TitleValue>
      </GosuTitleNameBox>
      <GosuServiceOfferBox>
        <GosuServiceOfferHeader>
          <h2>제공 서비스</h2>
          <GosuIsValid>수정</GosuIsValid>
        </GosuServiceOfferHeader>
        <PresentOfferList>
          <AddServiceBtn>+ 서비스추가</AddServiceBtn>
          <PresentOffer>
            <span>보컬레슨</span>
            <button className="OfferDeleteBtn">X</button>
          </PresentOffer>
        </PresentOfferList>
        <AddOfferList>
          <AddOfferHeader>
            <HeaderText>추가로 제공 가능한 서비스를 알려주세요.</HeaderText>
            <p>더 많은 고객을 만날 기회가 생깁니다.</p>
          </AddOfferHeader>
          <AddOfferCardList>
            <li>
              <button > + 성악 레슨</button>
            </li>
            <li>
              <button> + 축가 요청</button>
            </li>
            <li>
              <button> + 뮤지컬 레슨</button>
            </li>
          </AddOfferCardList>
        </AddOfferList>
      </GosuServiceOfferBox>
      <GosuServiceImgBox>
        <h2>사진 및 동영상</h2>
        <ServiceImgViewBox>
          <ServiceImgList>
            {/* {uploaded_image &&
              uploaded_image.map((img, index) => {
                return (
                  <li key={index}>
                    <img alt="리뷰사진" src={img} />
                  </li>
                );
              })} */}
          </ServiceImgList>
        </ServiceImgViewBox>
      </GosuServiceImgBox>
      <GosuProfileReview
        // review_counts={review_counts}
        // average_rating={average_rating}
        // totalReview={totalReview}
      />
    </GosuProfileWrapper>
  );
}

const GosuProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin-right: 20px;
`;

const GosuProfileSummary = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const ProfileImgBox = styled.div`
  width: 120px;
  height: 120px;
  background-image: url('/images/profile_img.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
`;

const GosuProfileImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
`;

const GosuSummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;

const GosuStatisticsBox = styled.ul`
  display: flex;
  margin-bottom: 15px;
`;

const Statistics = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  padding: 0 20px;
  width: 120px;
  h3 {
    font-size: 13px;
    color: #737373;
  }
`;

const ReviewData = styled.span`
  margin-bottom: 5px;
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

const GosuSummaryBtns = styled.div`
  display: flex;
  justify-content: center;
  button {
    height: 35px;
    width: 150px;
    margin-right: 20px;
    border: 1px solid #F2AA4C;
    border-radius: 5px;
    font-weight: bold;
  }
`;

const AnalysisBtn = styled.button`
  background-color: #F2AA4C;
  color: white;
  cursor: pointer;
`;

const PreviewBtn = styled.button`
  background-color: transparent;
  color: #F2AA4C;
  cursor: pointer;
`;

const GosuTitleNameBox = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dbdbdb;
`;

const TitleNameBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-right: 5px;
  h2 {
    font-size: 20px;
    font-weight: 500;
  }
`;

const EditValueBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #F2AA4C;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
`;

const TitleValue = styled.span`
  line-height: 1.7;
  color: #737373;
`;

const GosuServiceOfferBox = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dbdbdb;
`;

const GosuServiceOfferHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-right: 5px;
  h2 {
    font-size: 20px;
    font-weight: 500;
  }
`;

const GosuIsValid = styled.button`
  border: none;
  background-color: transparent;
  color: #F2AA4C;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
`;

const PresentOfferList = styled.ul`
  display: flex;
  margin-bottom: 30px;
`;

const AddServiceBtn = styled.button`
  margin-right: 20px;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-color: #F2AA4C;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

const PresentOffer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  padding: 10px 20px;
  height: 40px;
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  background-color: transparent;
  color: #737373;
  font-size: 15px;
`;

const AddOfferList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
`;

const AddOfferHeader = styled.div`
  margin-bottom: 15px;
  p {
    margin-bottom: 10px;
    color: #737373;
  }
`;

const HeaderText = styled.p`
  margin-bottom: 10px;
  color: black;
  font-weight: 500;
`;

const AddOfferCardList = styled.ul`
  display: flex;
  li {
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
      padding: 10px 20px;
      height: 40px;
      border: 1px solid #F2AA4C;
      border-radius: 20px;
      background-color: transparent;
      color: #737373;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;

const GosuServiceImgBox = styled.div`
  margin-bottom: 40px;
  padding: 20px 0;
  border-bottom: 1px solid #dbdbdb;
  h2 {
    font-size: 20px;
    font-weight: 500;
  }
`;

const ServiceImgViewBox = styled.div`
  margin-top: 30px;
  max-height: 700px;
`;

const ServiceImgList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
    margin: 5px;
    img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 110px;
      height: 110px;
      border-radius: 5px;
    }
  }
`;

export default GosuProfileSection;