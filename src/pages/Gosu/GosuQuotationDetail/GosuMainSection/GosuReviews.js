// import React from 'react';
// import styled, { css } from 'styled-components';
// import { RatingStars } from '../../../../RatingStars';
//
// function GosuReviews({ gosuDetails, gosuInfo, handleMoreBtn, closed }) {
//     const { average_rating, review_counts } = gosuDetails;
//
//     console.log(`object`, gosuInfo);
//     console.log(`gosuDetails`, review_counts);
//
//     return (
//         <ReviewWrapper>
//             <GosuReviewWrapper>
//                 <h2>리뷰</h2>
//                 <ReviewSummary>
//                     <ReviewAvg>{average_rating}</ReviewAvg>
//                     <ReviewInfo>
//                         <StarGrade>{RatingStars(average_rating)}</StarGrade>
//                         <ReviewTotal>{review_counts}개의 리뷰</ReviewTotal>
//                     </ReviewInfo>
//                 </ReviewSummary>
//                 <ReviewShowBox>
//                     <ReviewList isClosed={closed.review}>
//                         {gosuInfo.map((review, i) => {
//                             return (
//                                 <ReviewCard key={i}>
//                                     <UserReviewInfo>
//                                         <UserName>{review.name}</UserName>
//                                         <UserStarGrade>{RatingStars(review.rating)}</UserStarGrade>
//                                         <UserPostDate>
//                                             {review.created_at}
//                                         </UserPostDate>
//                                     </UserReviewInfo>
//                                     <UserReviewTextBox>
//                                         <p>{review.content}</p>
//                                     </UserReviewTextBox>
//                                 </ReviewCard>
//                             );
//                         })}
//                     </ReviewList>
//                     <ReviewMoreBox>
//                         <ReviewMoreBtn
//                             name="review"
//                             onClick={e => handleMoreBtn(e.target.name)}
//                         >
//                             리뷰 {closed.review ? '접기' : '더보기'}
//                         </ReviewMoreBtn>
//                     </ReviewMoreBox>
//                 </ReviewShowBox>
//             </GosuReviewWrapper>
//         </ReviewWrapper>
//     );
// }
//
// const ReviewWrapper = styled.section`
//   margin-bottom: 60px;
// `;
//
// const GosuReviewWrapper = styled.div`
//   border-bottom: 1px solid #dbdbdb;
//   h2 {
//     margin-bottom: 30px;
//     font-size: 25px;
//     font-weight: 500;
//   }
// `;
//
// const ReviewSummaryBox = styled.div``;
//
// const ReviewSummary = styled.div`
//   display: flex;
//   padding-bottom: 20px;
//   border-bottom: 1px solid #dbdbdb;
// `;
//
// const ReviewAvg = styled.span`
//   float: left;
//   left: 20%;
//   font-size: 50px;
//   font-weight: 600;
// `;
//
// const ReviewInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-left: 12px;
//   float: left;
//   left: 80%;
// `;
//
// const StarGrade = styled.ul`
//   margin-bottom: 5px;
// `;
//
// const ReviewTotal = styled.span`
//   font-size: 15px;
// `;
//
// const ReviewShowBox = styled.div`
//   display: inline-block;
//   width: 100%;
// `;
//
// const ReviewList = styled.ul`
//   ${({ isClosed }) =>
//     !isClosed &&
//     css`
//       max-height: 575px;
//       overflow: hidden;
//     `}
// `;
//
// const ReviewCard = styled.li`
//   padding: 30px 0;
// `;
//
// const UserReviewInfo = styled.div`
//   margin-bottom: 10px;
// `;
//
// const UserName = styled.span`
//   margin-right: 10px;
//   font-size: 16px;
//   font-weight: bold;
// `;
//
// const UserStarGrade = styled.ul`
//   display: inline;
//   margin-right: 10px;
//   width: 75px;
// `;
//
// const UserPostDate = styled.span`
//   color: darkgray;
// `;
//
// const UserReviewTextBox = styled.div`
//   p {
//     color: #737373;
//     line-height: 1.5;
//   }
// `;
//
// const ReviewMoreBox = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 20px 0 50px 0;
// `;
//
// const ReviewMoreBtn = styled.button`
//   padding: 13px 30px;
//   border: 1px solid #dbdbdb;
//   border-radius: 40px;
//   background-color: transparent;
//   color: rebeccapurple;
//   font-size: 15px;
//   font-weight: bold;
//   cursor: pointer;
//   &:hover {
//     background-color: rebeccapurple;
//     color: white;
//   }
// `;
//
// export default GosuReviews;