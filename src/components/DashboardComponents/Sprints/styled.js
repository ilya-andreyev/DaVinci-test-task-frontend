import styled from 'styled-components/macro';

export const Wrapper = styled.div``;

export const H2 = styled.h2`
  margin: 20px 0;
  text-align: center;
`;

export const WrapperAllSprint = styled.div`
  display: grid;
  gap: 50px;
`;

export const WrapperSprint = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow};
  border: solid 1px ${({ theme }) => theme.colors.gray1};
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr auto;
  padding: 10px;
`;

export const WrapperInfo = styled.div`
  display: grid;
  gap: 20px;
`;

export const WrapperStatistic = styled.div`
  display: grid;
`;

export const WrapperButton = styled.div`
  align-self: end;
  display: grid;
  justify-self: end;
  width: 150px;
`;

export const Span = styled.span`
  font-size: 12px;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.blue2};
`;
