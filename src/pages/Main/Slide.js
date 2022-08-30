import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Slide({ sliders, GoToCategory }) {
    return (
        <Container>
            <SlideTitle>인기 카테고리</SlideTitle>
            <StyledSlider {...settings}>
                {sliders.map((slider, i) => {
                    const { image, name, id } = slider;
                    return (
                        <CardBox key={i} onClick={() => GoToCategory(id)}>
                            <CardImg alt="인기 서비스" src= {image} />
                            <CardText>{name}</CardText>
                        </CardBox>
                    );
                })}
            </StyledSlider>
        </Container>
    );
}
export default Slide;
const settings = {
    dots: true, // 슬라이드 밑에 점 보이게
    infinite: true, // 무한으로 반복
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000, // 넘어가는 속도
    slidesToShow: 4, // 4장씩 보이게
    slidesToScroll: 2, // 1장씩 뒤로 넘어 가게
    centerMode: true,
    centerPadding: '0px', //0px 하면 슬라이드 끝쪽 이미지가 안잘림
};
const SlideTitle = styled.h2`
  padding: 60px 0px 50px 0px;
  text-align: center;
  font-size: 60px;
  font-weight: bolder;
  color : #F2AA4C;
  font-family:'CuteFont-Regular';
`;
const Container = styled.div`
  margin-right: 25px;
`;
const StyledSlider = styled(Slider)`
  .slick-list {
    width: 1450px;
    margin: 0 auto;
  }
  .slick-dots {
    bottom: -50px;
    margin-top: 200px;
  }
`;
const CardBox = styled.div`
  cursor: pointer;
  outline: none;
`;
const CardImg = styled.img`
  width: 320px;
  height: 190px;
  border-radius: 10px;
  margin : 0 auto;
  &:hover {
    opacity: 0.3;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const CardText = styled.p`
  padding: 20px;
  font-size: 35px;
  font-weight: bolder;
  text-align: center;
  color : #F2AA4C;
  font-family:'CuteFont-Regular';
`;