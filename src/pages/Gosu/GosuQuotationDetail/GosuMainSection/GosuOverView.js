
import styled from 'styled-components';



function GosuOverview({ gosuDetails }) {
    const { gosuName, category ,gosuGender ,gosuCareer,gosuRegion,gosuAge} =
        gosuDetails;

    return (
        <Overview>
            <GosuProfileImg alt="고수이미지" src={'/images/winter7.jpg'} />
            <GosuHeadBox>
                <GosuTitle>{gosuName}</GosuTitle>
                <GosuCategory>나이 : {gosuAge}</GosuCategory>
                <GosuCategory>성별 : {gosuGender}</GosuCategory>
                <GosuCategory>카테고리 :{category}</GosuCategory>
                <GosuCategory>사는지역 : {gosuRegion}</GosuCategory>
                <GosuCategory>경력 : {gosuCareer}년</GosuCategory>
            </GosuHeadBox>
        </Overview>
    );
}

const Overview = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 0;
`;

const GosuProfileImg = styled.img`
  width: 150px;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

const GosuHeadBox = styled.div`
  margin-left: 30px;
`;

const GosuTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 500;
`;

const GosuCategory = styled.h3`
  margin-bottom: 10px;
  color: #737373;
  font-size: 17px;
  font-weight: 400;
`;

const GosuGradeBox = styled.div``;

const GosuGrade = styled.span`
  margin: 0 10px;
  font-size: 20px;
  font-weight: 600;
`;

const GosuReviewCount = styled.span`
  color: #737373;
`;

export default GosuOverview;