import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GosuProfileSection from './GosuProfileSection';
import RequestListBar from './RequestListBar';

function GosuDetail() {
  // const [gosuProfileValue, setGosuProfileValue] = useState([]);
  // const [totalReview, setTotalReview] = useState([]);
  // const [quotationUsers, setQuotationUsers] = useState([]);
  // const [isRender, setIsRender] = useState(false);

  //고수 프로필 GET
  // const getGosuProfile = () => {
  //   fetch(`${BASE_URL}/masters`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: localStorage.getItem('access_token'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       setGosuProfileValue(res.results);
  //     });
  // };
  // useEffect(() => {
  //   getGosuProfile();
  // }, []);

  // //고수 리뷰 GET
  // useEffect(() => {
  //   fetch(`${BASE_URL}/reviews/1`)
  //     .then(res => res.json())
  //     .then(data => setTotalReview(data.results));
  // }, []);

  // //받은요청 리스트 GET
  // const getQuotationList = () => {
  //   setInterval(() => {
  //     fetch(`${BASE_URL}/quotations`, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: localStorage.getItem('access_token'),
  //       },
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         setQuotationUsers(data.results);
  //       });
  //   }, 7000);
  // };

  // useEffect(() => {
  //   getQuotationList();
  // }, []);
  // useEffect(() => {
  //   // console.log(quotationUsers);
  // }, [quotationUsers]);
  // console.log(`gosuProfileValue`, gosuProfileValue);
  return (
    <GosuMainContainer>
      {/* {gosuProfileValue.length && totalReview.length && ( */}
        <GosuProfileSection
          // gosuProfileValue={gosuProfileValue[0]}
          // totalReview={totalReview}
          
        />
      {/* )} */}
      <RequestListBar
        // quotationUsers={quotationUsers}
        // setQuotationUsers={setQuotationUsers}
      />
    </GosuMainContainer>
  );
}

const GosuMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
  padding-top: 30px;
`;

export default GosuDetail;