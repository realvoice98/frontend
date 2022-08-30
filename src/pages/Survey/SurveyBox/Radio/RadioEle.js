import styled from 'styled-components';

export const RadioBox = styled.div`
  ${({ theme }) => theme.flex('center', 'center', 'column')}
  width: 100%;
`;

export const Title = styled.h2`
  padding: 2rem 0;
  font-size: 1.5rem;
`;

export const RadioWrap = styled.ul`
  width: 100%;
`;

export const RadioList = styled.li`
  width: 100%;
  padding: 1rem 0;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  border-bottom: none;
  &:last-child {
    border: 1px solid #f2f2f2;
  }
`;

export const InputWrap = styled.div`
  padding: 0 1rem;
`;

export const Input = styled.input`
  margin-right: 1rem;
`;

export const Label = styled.label``;