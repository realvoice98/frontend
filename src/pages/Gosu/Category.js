import React from 'react';
import styled from 'styled-components';

function Category({ categories, setSelectedCategory }) {
    return (
        <CategoryWrap>
            {categories.map(({ name, image, id }) => {
                return (
                    <CategoryBox onClick={() => window.location.href='/Gosu/SignUp'} key={id}>
                        <CategoryImg alt="카테고리 이미지" src={image} />
                        <CategoryText>{name}</CategoryText>
                    </CategoryBox>
                );
            })}
        </CategoryWrap>
    );
}

export default Category;

const CategoryWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  list-style: none;
  margin-top: 0px;
  z-index: 1;
`;

const CategoryBox = styled.li`
  display: flex;
  flex-direction: column;
  width: 100px;
  margin: 20px;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: translateY(-15px);
  }
`;

const CategoryImg = styled.img`
  width: 40px;
`;

const CategoryText = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 15px;
  font-weight: bolder;
  color: white;
`;