import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.flex('center', 'center', 'column')}
  width: 100%;
`;

export const Title = styled.h2`
  padding: 2rem 0;
  font-size: 1.5rem;
`;

export const SelectBox = styled.div`
  ${({ theme }) => theme.flex('center', 'center', 'column')}
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  margin-bottom: 14px;
  padding: 12px;
  font-size: 15px;
  border-radius: 5px;
  outline-color: rebeccapurple;
  appearance: none;
`;

export const SelectCity = styled(Select)`
  .icon {
    font-size: 50px;
  }
`;

export const OptionCity = styled.option``;
export const SelectTown = styled(Select)``;
export const OptionTown = styled.option``;
export const OptionTownList = styled.option``;