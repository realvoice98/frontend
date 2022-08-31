import React from 'react';

import { ImArrowDown2 } from 'react-icons/im';

// STYLES
import * as S from './SelectEle';

function Select({ SelectData, getSelectValue ,add}) {
    return (
        <S.Container>
            <S.Title>{SelectData.Q1}</S.Title>
            <S.SelectBox>
                <S.SelectCity name="시/도">
                    <S.OptionCity value="서울시">서울시</S.OptionCity>
                    <ImArrowDown2 className="icon" />
                </S.SelectCity>
                
                <S.SelectTown name="시/군/구" onChange={getSelectValue}>
                    <S.OptionTown value="">시/군/구</S.OptionTown>
                    {SelectData.town.option.map((el, i) => {
                        return (
                            <S.OptionTownList key={i} value={el}>
                                {el}
                            </S.OptionTownList>
                        );
                    })}
                </S.SelectTown>
                {add <= 1? null :
                <S.SelectTown name="시/군/구" onChange={getSelectValue}>
                    <S.OptionTown value="">시/군/구</S.OptionTown>
                    {SelectData.town.option.map((el, i) => {
                        return (
                            <S.OptionTownList key={i} value={el}>
                                {el}
                            </S.OptionTownList>
                        );
                    })}
                </S.SelectTown>
                }
                {add <= 2 ? null :
                <S.SelectTown name="시/군/구" onChange={getSelectValue}>
                    <S.OptionTown value="">시/군/구</S.OptionTown>
                    {SelectData.town.option.map((el, i) => {
                        return (
                            <S.OptionTownList key={i} value={el}>
                                {el}
                            </S.OptionTownList>
                        );
                    })}
                </S.SelectTown>
                }
            </S.SelectBox>
        </S.Container>
    );
}

export default Select;