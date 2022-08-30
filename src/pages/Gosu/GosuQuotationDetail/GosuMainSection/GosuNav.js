import styled from 'styled-components';

function GosuNav() {
    const navList = ['견적서 제출 할 유저 정보'];
    return (
        <GosuStickyNav>
            {/*{navList.map((name, index) => {*/}
            {/*    return <NavTitle key={index}>{name}</NavTitle>;*/}
            {/*})}*/}
            <NavTitle>{navList}</NavTitle>
        </GosuStickyNav>


    );
}

const GosuStickyNav = styled.ul`
  display: flex;
  justify-content: flex-start;
  // position: sticky;
  width: 100%;
  top: 0;
  padding-top: 10px;
  border-bottom: 1px solid #dbdbdb;
  background-color: white;
  z-index: 2;
  margin-left:20px;
`;

const NavTitle = styled.li`
  padding: 10px 0 20px 0;
  color: #737373;
  font-size: 16px;
  & + li {
    margin-left: 20px;
  }
  &:hover {
    padding-bottom: 5px;
    border-bottom: 4px solid black;
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default GosuNav;