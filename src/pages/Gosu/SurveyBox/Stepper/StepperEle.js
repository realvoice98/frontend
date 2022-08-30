import styled from 'styled-components';

export const StepperBox = styled.div`
  padding: 2rem 0;
  width: 100%;
`;

export const Container = styled.div`
  ${({ theme }) => theme.flex('center', 'center', 'column')}
  width: 100%;
`;

export const ImgBox = styled.ul`
  ${({ theme }) => theme.flex('center', 'center', null)}
  width: 100%;
`;

export const ImgList = styled.li`
  ${({ theme }) => theme.flex('center', 'flex-start', 'column')}
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  transform: ${({ transform }) => `translateX(${transform}%)`};
  transition: 0.9s ease-in;
`;

export const Persentage = styled.p`
  margin: 0 0 5px 12px;
  color: rebeccapurple;
  font-weight: bold;
`;

export const Img = styled.img`
  width: 19%;
`;

export const StepperBg = styled.ul`
  width: 100%;
  display: flex;
`;

export const StepperBgLine = styled.li`
  position: relative;
  width: 100%;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    top: 15px;
    background-color: #ddd;
  }
`;

export const Stepper = styled.ul`
  width: 100%;
  display: flex;
`;

export const StepperLine = styled.li`
  position: relative;
  width: ${({ width }) => `${width}`};
  transition: width 0.8s ease-in;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    top: 15px;
    background-color: rebeccapurple;
  }
`;