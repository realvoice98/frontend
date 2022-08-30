import React from 'react';

// STYLES
import styled from 'styled-components';

function InfoBox() {
    return (
        <InfoContainer>
            <InfoTitle>Description</InfoTitle>
            <InfoText>
                서비스가 필요한 고객과 서비스를 제공하는 SOMEBODYHELPME를 쉽고 빠르게 연결해드리는 전문가 매칭 서비스입니다.
                1분 내외의 요청서를 작성하면, 여러 전문가님들이 맞춤형 견적을 보내드려요.
                맘에 쏙 드는 전문가의 맞춤형 서비스를 받아보세요.
            </InfoText>
            <InfoTitle>Information</InfoTitle>
            <InfoText>
                    실시간 유저 매칭 시스템과 채팅기능이 있는 사이트입니다~
            </InfoText>
        </InfoContainer>
    );
}

export default InfoBox;

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