import React,{useState,useEffect} from 'react';
// import { CATEGORY } from './CategoryListData';
// import Category from './Category';
import styled from "styled-components";
import {useHistory, useParams} from "react-router-dom";
import {getCookie} from "../shared/Cookie";
import Slide from "./Main/Slide";
import Slide2 from "./Slide2";
import {Stack} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import './Detail.scss';
import Category from "./Main/Category";
import {CATEGORY} from "./Main/CategoryListData";
import {Grid} from "../elements";


function DetailCategory(props) {
    const [sliders2,setSliders2] = useState([]);
    const params = useParams();
    const history = useHistory();
    const [serviceId2, setServiceId2] = useState();
    const token = getCookie('access_token');

    const [selectedCategory, setSelectedCategory] = useState(1);
    useEffect(() => {
        getInfo();
    }, []);
    const getInfo = () => {
        const { id } = params;
        fetch(`/category/${id}`, {
            method:'GET',
            headers: {
                Authorization: getCookie('access_token'),
            },
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                let sliders2 = res;
                localStorage.setItem('id',id);
                setSliders2(res);
                console.log(sliders2);
            });
    };

    // const [sliders2, setSliders] = useState([{
    //     image:'../images/4.jpg',
    //     name:'서빙',
    //     id:'0'
    // },{
    //     image:'../images/winter5.jpg',
    //     name:'편의점 알바',
    //     id:'1'
    // },{
    //     image:'../images/winter6.jpg',
    //     name:'알바3',
    //     id:'2'
    // },{
    //     image:'../images/winter7.jpg',
    //     name:'알바4',
    //     id:'3'
    // },{
    //     image:'../images/winter8.jpg',
    //     name:'알바5',
    //     id:'4'
    // },{
    //     image:'../images/winter9.png',
    //     name:'알바6',
    //     id:'5'
    // },
    //     {
    //     image:'../images/winter10.jpg',
    //     name:'알바7',
    //     id:'6'
    // },
    //     {
    //     image:'../images/111111.jpg',
    //     name:'알바8',
    //     id:'7'},
    //     {
    //     image:'../images/bedroom.jpg',
    //     name:'알바9',
    //     id:'8'}]);
    //

    const GoToServey = serviceId2 => {
        if (token) {
            const{id} = params
            console.log(id)
            setServiceId2(serviceId2);
            return window.location.replace(`/category/${id}/survey/${serviceId2}`);
        } else {
            alert('로그인이 필요합니다.');
        }
    };
    // const getInfo = () => {
    //     const { id } = params;
    //     console.log(id)
    //     fetch(`/category/${id}`, {
    //         method:'GET',
    //         headers: {
    //             Authorization: getCookie('is_login'),
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log(res);
    //             let pageInfo = res;
    //             setPageInfo(pageInfo);
    //             // console.log(pageInfo[0])
    //         });
    // };
    return (
        <>
            <Header1>
                <MainTop>
                    {/*<MainTopTitle src="../images/4.jpg" />*/}
                    <MainTopText>알바</MainTopText>
                    </MainTop>
            <main  style={{zIndex:5}} className='DetailCategory'>
                <header
                    className='main-header'
                >
                    <div className='main-header-contents'>
                        <div className='main-form-input'>
                            <input
                                type='text'
                                placeholder='어떤 분야의 전문가를 찾으시나요?'
                                autoComplete='off'
                                className='input-main'
                            />
                            <button type='button' className='btn-main'>
                                <FontAwesomeIcon icon={faSearch} /> 고수찾기
                            </button>
                        </div>
                    </div>
                </header>
                {selectedCategory.length !== 0 && (
                    <Category
                        categories={CATEGORY}
                        setSelectedCategory={setSelectedCategory}
                    />
                )}
            </main>
        </Header1>
            <Grid container spacing={1}>
                {
                    sliders2.length != 0  &&
                    <Slide2 sliders2={sliders2} GoToServey={GoToServey} />
                }
            </Grid>
        </>
    );
}

export default DetailCategory;
        
        

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
  margin-top: 180px;
  margin-bottom:50px;
  align-items: center;
`;

const MainTopTitle = styled.img`
  display: flex;
  width: 250px;
  padding: 10px;
  z-index: 1;
`;
const MainTopText = styled.p`
  margin-top: 15px;
  color: white;
  font-size: 60px;
  font-family:'CuteFont-Regular';
  z-index: 1;
  
`;
const CardBox = styled.div`
  cursor: pointer;
  outline: none;
`;
const CardImg = styled.img`
  width: 380px;
  height: 190px;
  border-radius: 10px;
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
