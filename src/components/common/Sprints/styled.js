import styled from 'styled-components/macro';

export const Wrapper = styled.div`

`;

export const H2 = styled.h2`
  margin: 20px 0;
`;

export const WrapperAllSprint = styled.div`
  display: grid;
  gap: 50px;
`;

export const WrapperSprint = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow};
  border: solid 1px ${({ theme }) => theme.colors.gray};
  display: grid;
  gap: 20px;
  padding: 10px;
`;

export const Span = styled.span`
  font-size: 12px;
`;

export const Paragraph = styled.p`
  
`;
