import React, {useState} from 'react';
import { CATEGORY } from './CategoryListData';
import styled from 'styled-components';
import Category from './Category';
import {useHistory} from "react-router-dom";
import {getCookie} from "../../shared/Cookie";
import Bottom from "./Bottom";

const GosuMain = () => {
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [serviceId, setServiceId] = useState();
    const history = useHistory();
    const token = getCookie('is_login');
    return (
        <>
            <Header1>
                <MainTop>
                    {/*<MainTopTitle src="../images/4.jpg" />*/}
                    <MainTopText></MainTopText>
                </MainTop>
                {selectedCategory.length !== 0 && (
                    <Category
                        categories={CATEGORY}
                        setSelectedCategory={setSelectedCategory}
                    />
                )}
            </Header1>
            <Bottom></Bottom>
        </>
    );
}

export default GosuMain;
const Header1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  background-image: url('../images/Gosu_bg.png');
  background-position: center;
  background-repeat: no-repeat;
  
  z-index: 1;
  
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
  width: 250px;
  padding: 10px;
  z-index: 1;
`;
const MainTopText = styled.p`
  margin-top: 15px;
  color: white;
  font-size: 20px;
  z-index: 1;
`;