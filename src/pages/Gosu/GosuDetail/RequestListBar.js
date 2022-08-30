import React from 'react';
import styled from 'styled-components';

// const MESSAGE = {
//   ACCEPTED: 'Transaction Accepted',
//   DENIED: 'Transaction Denied',
// };

// const REQUEST_ACCEPT = 1;
// const REQUEST_REJECT = 0;

function RequestListBar({ quotationUsers, setQuotationUsers }) {
//   const updateQuotation = (quotation_id, is_completed) => {
//     // fetch(`${BASE_URL}/quotations`, {
//     //   method: 'PATCH',
//     //   headers: {
//     //     Authorization: localStorage.getItem('access_token'),
//     //   },
//     //   body: JSON.stringify({ quotation_id, is_completed }),
//     // })
//     //   .then(res => res.json())
//     //   .then(res => {
//     //     switch (res.message) {
//     //       case MESSAGE.ACCEPTED:
//     //         alert('요청이 수락하였습니다.');
//     //         break;
//     //       case MESSAGE.DENIED:
//     //         alert('요청을 거절하였습니다.');
//     //         break;

//     //       default:
//     //         alert('서버로부터 예외가 발생하였습니다');
//     //         break;
//     //     }

//     //     setQuotationUsers(prev =>
//     //       prev.filter(quotation => quotation.quotation_id !== quotation_id)
//     //     );
//     //   });
//   };

//   const acceptRequest = quotation_id => {
//     updateQuotation(quotation_id, REQUEST_ACCEPT);
//   };

//   const rejectRequest = quotation_id => {
//     updateQuotation(quotation_id, REQUEST_REJECT);
//   };

  return (
    <RequestWrapper>
      <RequestBox>
        <GosuTitle>받은 요청 리스트</GosuTitle>
        <ul>
          {/* {quotationUsers.map(({ quotation_id, user_id, user_name }) => {
            return ( */}
              <RequestCard>
                <span>test</span>
                <BtnBox>
                  <SuggestBtn 
                  // onClick={() => acceptRequest(quotation_id)}
                  >
                    수락
                  </SuggestBtn>
                  <SuggestBtn 
                  // onClick={() => rejectRequest(quotation_id)}
                  >
                    거절
                  </SuggestBtn>
                </BtnBox>
              </RequestCard>
             {/* );
           })} */}
        </ul>
      </RequestBox>
    </RequestWrapper>
  );
}

const RequestWrapper = styled.aside`
  padding-left: 20px;
`;

const RequestBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  padding: 30px 10px 10px 10px;
  top: 100px;
  width: 15%;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
`;

const GosuTitle = styled.p`
  padding-bottom: 20px;
  text-align: center;
  border-bottom: 1px solid #dbdbdb;
  font-weight: 500;
`;

const RequestCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SuggestBtn = styled.button`
  margin: 0 5px;
  outline: none;
  border: 1px solid #F2AA4C;
  border-radius: 5px;
  background-color: white;
  color: #F2AA4C;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #F2AA4C;
    color: white;
  }
`;

export default RequestListBar;

// const fetchFunction = () => {
//   fetch(`apikey`, {
//     headers: {
//       Authorization: localStorage.getItem('access_token'),
//     },
//   })
//   .then(res => res.json())
//   .then(res => user_id  어쩌구저쩌구)
// };

// setInterval(() => {
//   fetchFunction();
// }, 5000);

// const patchFunction = () => {
//   fetch('apikey', {
//     method: 'PATCH',
//     headers: {
//       Authorization: localStorage.getItem('access_token'),
//     },
//     body: {
//       user_id: user_id,
//     },
//   });
// };