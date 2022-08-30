import React, { useState } from 'react';
import * as S from './RadioEle';

function Radio({ radioValue, question, getRadioValue }) {
    return (
        <S.RadioBox>
            <S.Title>{question.Q1}</S.Title>
            <S.RadioWrap>
                {question.answer.map((data, i) => {
                    return (
                        <S.RadioList
                            key={i}
                            onClick={() => getRadioValue([data, question.name])}
                        >
                            <S.InputWrap>
                                <S.Input
                                    type="radio"
                                    name={question.id}
                                    id={data}
                                    onChange={() => getRadioValue([data, question.name])}
                                    checked={data === radioValue[question.name]}
                                />
                                <S.Label htmlFor="">{data}</S.Label>
                            </S.InputWrap>
                        </S.RadioList>
                    );
                })}
            </S.RadioWrap>
        </S.RadioBox>
    );
}

export default Radio;