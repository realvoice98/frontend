import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// COMPONENTS
import Radio from './Radio/Radio';
import Select from './Select/Select';
import Stepper from './Stepper/Stepper';
import Loading from './Loading';

// QUESTION DATA
import {
    SelectData,
    questionOne,
    questionTwo,
    questionThree,
} from '../SurveyData';

// STYLES
import * as S from './SurveyBoxEle';
import {getCookie} from "../../../shared/Cookie";
import { SelectTown } from './Select/SelectEle';
import { GiConsoleController } from 'react-icons/gi';

// APIKEY

function SurveyBox({ pageInfo,id }) {
    const [loading, setLoading] = useState(false);
    const [selectedTown, setSelectedTown] = useState([]);
    const [radioValue, setRadioValue] = useState({
        gender: '',
        age: '',
        career: '',
    });
    const [add,setAdd] = useState(0);

    const currentRadioQuestions = {
        0: 'gender',
        1: 'age',
        2: 'career',
    };

    let [currentQ, setCurrentQ] = useState(0);

    const history = useHistory();

    // FUNCTIONS
    // const goToFindGosu = () => {
    //     history.push(`/findgosu/${pageInfo.service_id}`);
    // };

    const loadingTime = () => {
        setTimeout(() => {
            submitForm();
        }, 2000);
    };

    const clickNextBtn = () => {
        if (
            (currentQ === 0 && radioValue.gender !== '') ||
            (currentQ === 1 && radioValue.age !== '') ||
            (currentQ === 2 && radioValue.career !== '')
        ) {
            plusCurrentQ();
        } else if (currentQ === 3 && selectedTown !== '') {
            setLoading(true);
            loadingTime();
        }
    };

    const plusCurrentQ = () => {
        if (currentQ < 3) {
            setCurrentQ(currentQ + 1);
        }
    };

    const clickPrevBtn = () => {
        setAdd(0);
        if (currentQ === 0) {
            setCurrentQ(0);
            setRadioValue('');
        } else if (currentQ > 0) {
            setCurrentQ(currentQ - 1);
        }
    };

    const getSelectValue = e => {
        const { value } = e.target;
        if(value != '선택안함'){
            let copy = [...selectedTown]
            copy.push(value)
            setSelectedTown(copy);
            // console.log(selectedTown)
            setAdd(add+1)    
        }
        
    };

    const getRadioValue = data => {
        const [question, value] = data;

        setRadioValue({ ...radioValue, [value]: question });
    };

    const renderByCurrentQuestion = currentQuestionIdx => {
        const questionMapper = {
            0: (
                <Radio
                    radioValue={radioValue}
                    question={questionOne}
                    getRadioValue={getRadioValue}
                />
            ),
            1: (
                <Radio
                    radioValue={radioValue}
                    question={questionTwo}
                    getRadioValue={getRadioValue}
                />
            ),
            2: (
                <Radio
                    radioValue={radioValue}
                    question={questionThree}
                    getRadioValue={getRadioValue}
                />
            ),
            3: <Select SelectData={SelectData} getSelectValue={getSelectValue} add={add} />,
        };

        return (
            <S.SurveyLine>
                <S.RadioBox>{questionMapper[currentQuestionIdx]}</S.RadioBox>
            </S.SurveyLine>
        );
    };

    const submitForm = () => {
        const age = radioValue.age.slice(0, 2);
        const [career] = radioValue.career.split('~');
        let a = localStorage.getItem('id')
        fetch(`/category/${a}/survey/${id}/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getCookie('access_token'),
            },
            body: JSON.stringify({
                email:localStorage.getItem('email'),
                age: Number(age),
                career: Number(career),
                gender: radioValue.gender,
                region: selectedTown,
                category : pageInfo.name,

            }),
        })
            .then(res => res.json())
            // .then(goToFindGosu());
            .then((res)=>{
                console.log(a,id);
                document.location.href='/';
            })
    };

    return (
        <S.SurveyFormBox>
            <S.SurveyForm>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <Stepper currentQ={currentQ} />
                        {renderByCurrentQuestion(currentQ)}
                        <S.BtnLine>
                            {currentQ !== 0 && (
                                <S.PrevBtn onClick={clickPrevBtn}>이전</S.PrevBtn>
                            )}
                            <S.NextBtn onClick={clickNextBtn}>다음</S.NextBtn>
                        </S.BtnLine>
                    </>
                )}
            </S.SurveyForm>
        </S.SurveyFormBox>
    );
}

export default SurveyBox;
