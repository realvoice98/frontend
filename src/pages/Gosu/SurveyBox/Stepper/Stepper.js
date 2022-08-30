import React from 'react';

import * as S from './StepperEle';
const Img = '/images/winter9.png';

function Stepper({ currentQ }) {
    const translateValueMapper = {
        0: { value: 0, width: '0%' },
        1: { value: 14, width: '18%' },
        2: { value: 26, width: '30%' },
        3: { value: 46, width: '50%' },
        4: { value: 66, width: '70%' },
        5: { value: 86, width: '90%' },
    };
    const transform = translateValueMapper[currentQ].value;
    const width = translateValueMapper[currentQ].width;

    return (
        <S.StepperBox>
            <S.Container>
                <S.ImgBox>
                    <S.ImgList transform={transform}>
                        <S.Persentage>{transform}%</S.Persentage>
                        <S.Img alt="winter" src={Img} />
                    </S.ImgList>
                </S.ImgBox>
                <S.StepperBg>
                    <S.StepperBgLine></S.StepperBgLine>
                </S.StepperBg>
                <S.Stepper>
                    <S.StepperLine width={width}></S.StepperLine>
                </S.Stepper>
            </S.Container>
        </S.StepperBox>
    );
}

export default Stepper;