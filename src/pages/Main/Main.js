import React, {useState} from 'react';
import { CATEGORY } from './CategoryListData';
import styled from 'styled-components';
import Category from './Category';
import {useHistory} from "react-router-dom";
import {getCookie} from "../../shared/Cookie";
import Slide from "./Slide";
import DetailCategory from "../DetailCategory";
import '../Detail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

const Main = () => {

    // const [sliders2,setSliders2]=useState([]);
    // useEffect(() => {
    //     getInfo();
    // }, []);
    //
    // const getInfo = () => {
    //     fetch(`/`, {
    //         method:'GET',
    //         headers: {
    //             Authorization: getCookie('is_login'),
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log(res);
    //             let sliders2 = res;
    //             setSliders(sliders2);
    //             console.log(sliders2)
    //         });
    // };

    const [sliders, setSliders] = useState([{
        image:'../images/design.jpg',
        name:'디자인/개발',
        id:'0',
    },{
        image:'../images/arbeit.jpg',
        name:'알바',
        id:'1'},{
        image:'../images/lesson.jpg',
        name:'레슨',
        id:'2'},{
        image:'../images/event.jpg',
        name:'이벤트',
        id:'3'},{
        image:'../images/health.jpg',
        name:'건강/미용',
        id:'4'}]);
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [serviceId, setServiceId] = useState();
    const history = useHistory();
    const token = getCookie('access_token');
    const GoToCategory = serviceId => {
        if (token) {
            setServiceId(serviceId);
            return history.push(`/category/${serviceId}`);
        } else {
            history.push(`/category/${serviceId}`)
        }
    };
    const goToLawSurvey = () => {
        window.location.href = `/lawsurvey/`;
    };
    return (
        <>
            <Header1>
                <MainTop>
                    <MainTopTitle src="../images/Mainfont1.png" />
                    <MainTopText>생활의 전문가들과 새로운 인연을 맺어보세요!</MainTopText>
                </MainTop>              
                {selectedCategory.length !== 0 && (
                <Category
                    GoToCategory={GoToCategory}
                    categories={CATEGORY}
                    setSelectedCategory={setSelectedCategory}
                />
                    )}
            </Header1>
            {sliders.length !== 0 && (
                <Slide sliders={sliders} GoToCategory={GoToCategory} />
            // <DetailCategory sliders={sliders} GoToServey={GoToServey} />
            )}
            
        </>
    );
}


export default Main;
const Header1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  margin : 0 auto;
  width: 1300px;
  background-image: url('/images/sea1.png');
  background-position: center;
  background-repeat: no-repeat;
  animation: gradient 9s ease-in-out infinite;
  animation: slidein 30s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  z-index: 1;
  &::before {
    position: absolute;
    width: 1300px;
    height: 500px;
    background-color: rgba(0.3, 0.3, 0.3, 0.3);
    // background-color: rgba(0, 0, 0, 0);
    content: '';
  }
  @keyframes slidein {
    from {
      background-position: top;
      background-size: 2000px;
    }
    to {
      background-position: -100px -650px;
      background-size: 2200px;
    }
  }
`;

const MainTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 130px;
  align-items: center;
  
  
`;

const MainTopTitle = styled.img`
  display: flex;
  width: 150px;
  height: 150px;
  z-index: 0;
`;
const MainTopText = styled.p`
  color: white;
  font-size: 40px;
  z-index: 1;
  font-family:'CuteFont-Regular';
`;
