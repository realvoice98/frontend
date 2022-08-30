import styled from 'styled-components';

export const BtnsContainer = styled.div`
  ${({ theme }) => theme.flex('center', 'center', 'column')};
  width: 100%;
`;

export const Btns = styled.button`
  width: 70%;
  height: 50px;
  margin: 5px 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ blackFont }) => (blackFont ? '#000' : '#fff')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const KakaoBtn = styled.button`
  width: 70%;
  height: 50px;
  margin: 5px 0;
  color: #783c00;
  background-color: #ffeb00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;