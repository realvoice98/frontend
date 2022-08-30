import styled from 'styled-components';

function GosuFAQ() {
    return (
        <FaqWrapper>
            <h2>질문답변</h2>
            <ul>
                <FaqCard>
                    <GosuQuestion>
                        Q. 서비스가 시작되기 전 어떤 절차로 진행하나요?
                    </GosuQuestion>
                    <GosuAnswer>
                        채팅 상담으로 진행합니다 현장상태 확인 및 시간 조율등 고객분들의
                        원하시는 부분 체크하여 맞춤형 서비스를 제공하도록 합니다
                    </GosuAnswer>
                </FaqCard>
                <FaqCard>
                    <GosuQuestion>Q. 어떤 서비스를 전문적으로 제공하나요?</GosuQuestion>
                    <GosuAnswer>
                        이사입주.신축입주.준공.사무실.상가. 외벽등 다양한 분야를 취급합니다
                        <br></br>
                        에어컨분해청소.세탁기분해청소.침대매트리스청소.소파청소. 가전 및
                        가구도 서비스를 제공합니다
                        <br></br>줄눈시공.실리콘 시공 작업도 제공합니다
                        <br></br>
                        마루왁스코팅.씽크대상판연막코팅.유리막코팅.나노코팅 작업도
                        제공합니다
                    </GosuAnswer>
                </FaqCard>
            </ul>
        </FaqWrapper>
    );
}

const FaqWrapper = styled.section`
  margin-bottom: 60px;
  h2 {
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: 500;
  }
`;

const FaqCard = styled.li`
  margin: 30px 0;
`;

const GosuQuestion = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const GosuAnswer = styled.p`
  margin-bottom: 5px;
  color: #737373;
  font-size: 16px;
  line-height: 2;
`;

export default GosuFAQ;