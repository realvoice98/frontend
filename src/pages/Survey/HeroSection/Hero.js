import React from 'react';

// COMPONENTS
import { RatingStars } from '../../../RatingStars';

// STYLES
import * as S from './HeroEle';

// let pageInfo1 =
//     {image:'/images/4.jpg',
//         name:'얍얍',
//         masters:'1111',
//         applications : '1111',
//         reviews:'11111'
//
//     }




let rating = 5;

// { rating, pageInfo1 }
function Hero(props) {
    return (
        <S.HeroSection mainImg={props.pageInfo.image}>
            <S.HeroTextBox>
                <S.TotalBox>
                    <S.Total>
                        <S.MainTitle >{props.pageInfo.name}</S.MainTitle>
                    </S.Total>
                </S.TotalBox>

                <S.StarsBox>
                    {rating && <S.Stars>{RatingStars(rating)}</S.Stars>}
                    <S.Rating>{props.pageInfo.count1}점</S.Rating>
                </S.StarsBox>
                <S.TotalBox>
                    <S.Total>
                        <h5>{props.pageInfo.count2}</h5>
                        <p>활동 전문가</p>
                    </S.Total>
                    <S.Total>
                        <h5>{props.pageInfo.count3}</h5>
                        <p>누적 요청서</p>
                    </S.Total>
                    <S.Total>
                        <h5>{props.pageInfo.count4}</h5>
                        <p>리뷰 수</p>
                    </S.Total>
                </S.TotalBox>
            </S.HeroTextBox>
        </S.HeroSection>
    );
}

export default Hero;