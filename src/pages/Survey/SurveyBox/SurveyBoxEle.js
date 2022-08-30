import styled from 'styled-components';

export const SurveyFormBox = styled.div`
  flex: 60%;
  width: 3.75rem;
  min-height: 300px;
  padding: 2.5rem;
  transform: translateY(-12.25rem);
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  z-index: 2;
`;

export const SurveyForm = styled.div`
  ${({ theme }) => theme.flex('center', 'stretch', 'column')}
`;

export const SurveyLine = styled.div`
  width: 100%;
  padding: 2rem 0;
`;

export const RadioBox = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)}
  width: 100%;
`;

export const BtnLine = styled.div`
  ${({ theme }) => theme.flex('flex-end', 'center', null)}
  width: 100%;
  padding: 2rem 0 2rem 1rem;
`;

export const Btns = styled.button`
  padding: 0.7rem 2rem;
  margin: 0 0 0 0.5rem;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
`;

export const PrevBtn = styled(Btns)`
  background-color: #fff;
  color: rebeccapurple;
  border: 1px solid rebeccapurple;
`;

export const NextBtn = styled(Btns)`
  background-color: orange;
  color: #fff;
  border: none;
`;