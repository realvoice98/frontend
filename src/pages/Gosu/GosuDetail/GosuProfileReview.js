import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { RatingStars } from '../../../RatingStars';

function GosuProfileReview() {
  // const [closed, setClosed] = useState({
  //   review: false,
  // });

  // const handleMoreBtn = name => {
  //   setClosed({ [name]: !closed[name] });
  // };

  return (

      <ReviewWrapper>
        <GosuReviewWrapper>
          <h2>리뷰</h2>
          <ReviewSummary>
            <ReviewAvg></ReviewAvg>
            <ReviewInfo>
              <StarGrade></StarGrade>
              <ReviewTotal>4개의 리뷰</ReviewTotal>
            </ReviewInfo>
          </ReviewSummary>
          <ReviewShowBox>
            <ReviewList>
                    <ReviewCard>
                      <UserReviewInfo>
                        <UserName>리뷰이름</UserName>
                        <UserStarGrade>레이팅</UserStarGrade>
                        <UserPostDate>
                          {/* {review.created_at.split('T')[0]} */}
                        </UserPostDate>
                      </UserReviewInfo>
                      <UserReviewTextBox>
                        <p>ㅌㅌ</p>
                      </UserReviewTextBox>
                    </ReviewCard>
            </ReviewList>
            <ReviewMoreBox>
              <ReviewMoreBtn>
              </ReviewMoreBtn>
            </ReviewMoreBox>
          </ReviewShowBox>
        </GosuReviewWrapper>
      </ReviewWrapper>
    )
}

const ReviewWrapper = styled.section`
  margin-bottom: 60px;
`;

const GosuReviewWrapper = styled.div`
  border-bottom: 1px solid #dbdbdb;
  h2 {
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: 500;
  }
`;

const ReviewSummaryBox = styled.div``;

const ReviewSummary = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #dbdbdb;
`;

const ReviewAvg = styled.span`
  float: left;
  left: 20%;
  font-size: 50px;
  font-weight: 600;
`;

const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  float: left;
  left: 80%;
`;

const StarGrade = styled.ul`
  margin-bottom: 5px;
`;

const ReviewTotal = styled.span`
  font-size: 15px;
`;

const ReviewShowBox = styled.div`
  display: inline-block;
  width: 100%;
`;

const ReviewList = styled.ul`
  ${({ isClosed }) =>
    !isClosed &&
    css`
      max-height: 575px;
      overflow: hidden;
    `}
`;

const ReviewCard = styled.li`
  padding: 30px 0;
`;

const UserReviewInfo = styled.div`
  margin-bottom: 10px;
`;

const UserName = styled.span`
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const UserStarGrade = styled.ul`
  display: inline;
  margin-right: 10px;
  width: 75px;
`;

const UserPostDate = styled.span`
  color: darkgray;
`;

const UserReviewTextBox = styled.div`
  p {
    color: #737373;
    line-height: 1.5;
  }
`;

const ReviewMoreBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 50px 0;
`;

const ReviewMoreBtn = styled.button`
  padding: 13px 30px;
  border: 1px solid #dbdbdb;
  border-radius: 40px;
  background-color: transparent;
  color: rebeccapurple;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: rebeccapurple;
    color: white;
  }
`;

export default GosuProfileReview;