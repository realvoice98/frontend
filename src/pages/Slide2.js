import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Detail.scss';
import {Container,Row,Col} from 'react-bootstrap'
import {Box,Grid} from "@mui/material";

function Slide2({ sliders2, GoToServey }) {
    const _idx = 1;
    return (
        <>
            <SlideTitle>알바 카테고리</SlideTitle>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={4}>
                    <Box  color="info.contrastText">
                        <CardBox  onClick={() => GoToServey(sliders2[0]._idx)}>
                            <CardImg alt="인기 서비스" src= {sliders2[0].image} />
                            <CardText>{sliders2[0].name}</CardText>
                        </CardBox>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box  color="info.contrastText">
                        <CardBox  onClick={() => GoToServey(sliders2[1]._idx)}>
                            <CardImg  alt="인기 서비스" src= {sliders2[1].image} />
                            <CardText>{sliders2[1].name}</CardText>
                        </CardBox>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box color="info.contrastText" >
                        <CardBox  onClick={() => GoToServey(sliders2[2]._idx)}>
                            <CardImg alt="인기 서비스" src= {sliders2[2].image} />
                            <CardText>{sliders2[2].name}</CardText>
                        </CardBox>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box color="info.contrastText" >
                        <CardBox  onClick={() => GoToServey(sliders2[3]._idx)}>
                            <CardImg alt="인기 서비스" src= {sliders2[3].image} />
                            <CardText>{sliders2[3].name}</CardText>
                        </CardBox>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box color="info.contrastText" >
                        <CardBox  onClick={() => GoToServey(sliders2[4]._idx)}>
                            <CardImg alt="인기 서비스" src= {sliders2[4].image} />
                            <CardText>{sliders2[4].name}</CardText>
                        </CardBox>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box  color="info.contrastText" >
                        <CardBox  onClick={() => GoToServey(sliders2[5]._idx)}>
                            <CardImg alt="인기 서비스" src= {sliders2[5].image} />
                            <CardText>{sliders2[5].name}</CardText>
                        </CardBox>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box  color="info.contrastText" >
                <CardBox  onClick={() => GoToServey(sliders2[6]._idx)}>
                    <CardImg alt="인기 서비스" src= {sliders2[6].image} />
                    <CardText>{sliders2[6].name}</CardText>
                </CardBox>
                    </Box>
            </Grid><Grid item xs={12} sm={4}>
                <Box  color="info.contrastText" >
                    <CardBox  onClick={() => GoToServey(sliders2[7]._idx)}>
                        <CardImg alt="인기 서비스" src= {sliders2[7].image} />
                        <CardText>{sliders2[7].name}</CardText>
                    </CardBox>
                </Box>
            </Grid><Grid item xs={12} sm={4}>
                <Box  color="info.contrastText" >
                    <CardBox  onClick={() => GoToServey(sliders2[8]._idx)}>
                        <CardImg alt="인기 서비스" src= {sliders2[8].image} />
                        <CardText>{sliders2[8].name}</CardText>
                    </CardBox>
                </Box>
            </Grid>
            </Grid>

        </>

    );
}
export default Slide2;
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
  padding: 60px 0px 0px 0px;
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
  margin-bottom:30px;
`;
const StyledSlider = styled(Slider)`
  .slick-list {
    width:1500px;
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
  width: 350px;
  height: 210px;
  border-radius: 10px;
  display:block;
  margin:auto;
  &:hover {
    opacity: 0.3;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const CardText = styled.p`
  padding: 20px;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
 
`;
