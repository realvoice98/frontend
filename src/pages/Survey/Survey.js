import InfoBox from './InfoBox';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {getCookie} from "../../shared/Cookie";
import Hero from './HeroSection/Hero';
import SurveyBox from "./SurveyBox/SurveyBox";
import {useSelector} from "react-redux";


function Survey(props) {
    const [pageInfo, setPageInfo] = useState([]);
    const [rating, setRating] = useState();
    const history = useHistory();
    const params = useParams();
    const { id } = params;
    console.log(id);
    useEffect(() => {
        getInfo();
    }, []);

    useEffect(() => {
        cuttingRating();
    }, [pageInfo]);

    const cuttingRating = () => {
        setRating(Math.floor(pageInfo));
    };
    const getInfo = () => {
        const { id } = params;
        console.log(id)
        let a = localStorage.getItem('id')
        fetch(`/category/${a}/survey/${id}`, {
            method:'GET',
            headers: {
                Authorization: getCookie('is_login'),
            },
        })
            .then(res => res.json())
            .then(res => {
            console.log(res);
            let pageInfo = res;
            setPageInfo(pageInfo);
            // console.log(pageInfo[0])
            });
    };
    return (
        <>
            <SurveyContainer>
                <Hero pageInfo={pageInfo} rating = {rating} />
                <SurveySection pageInfo = {pageInfo}>
                    <SurveyBox id={id} pageInfo={pageInfo}/>
                <InfoBox />
                </SurveySection>
            </SurveyContainer>
        </>
    );
}
//pageInfo={pageInfo}
const SurveyContainer = styled.div``;

const SurveySection = styled.div`
  ${({ theme }) => theme.flex('center', 'flex-start', null)}
  width: 970px;
  margin: 1rem auto 0;
`;

export default Survey;
