import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  padding: 0 10px;
`;

export const WrapperTable = styled.div`
  display: grid;
  gap: 30px;
  grid-template-rows: auto 1fr;
  margin-top: 30px;
`;

export const WrapperInfo = styled.div`
  display: grid;
  gap: 20px;
  justify-items: center;

  & > button {
    width: 200px;
  }
`;
