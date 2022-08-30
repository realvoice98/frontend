import React from 'react';

// STYLES
import styled from 'styled-components';

function GosuInfoBox() {
    return (
        <InfoContainer>
            <InfoTitle>Description</InfoTitle>
            <InfoText>
                고객이 원하는 서비스를 선택하여 요청서를 작성하면 48시간 내에 전문가가 견적견적금액과 프로필을 보냅니다.
                여러 명의 전문가의 견적을 확인한 후 채팅방을 통해 상담을 받고, 나에게 딱 맞는 전문가를 선택하세요.
            </InfoText>
            <InfoTitle>Information</InfoTitle>
            <InfoText>
                고객이 직접 작성한 요청서를 전문가에게 보내드립니다.받은 요청서 중에서 적합한 고객을 선택하여 고객의 요구사항이 반영되도록 견적(견적금액과 프로필)을 보내세요.채팅 혹은 안심번호 통화를 통해 고객과 빠르게 연락할 수 있습니다.
            </InfoText>
        </InfoContainer>
    );
}

export default GosuInfoBox;

const InfoContainer = styled.div`
  flex: 40%;
  max-width: 500px;
  padding: 1rem 1rem;
`;

const InfoTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const InfoText = styled.p`
  margin-bottom: 2.5rem;
  color: #737373;
  line-height: 1.4;
  white-space: wrap;
`;