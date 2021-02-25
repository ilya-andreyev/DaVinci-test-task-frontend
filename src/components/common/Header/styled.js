import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  white-space: nowrap;
`;

export const WrapperTopMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.blue1};
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 1fr;
  height: auto;
  padding: 3px;
`;

export const LeftMenu = styled.div`
  align-items: center;
  display: grid;
  gap: 10px;
  grid-auto-flow: column;
  justify-content: start;
`;

export const RightMenu = styled.div`
  align-items: center;
  display: grid;
  gap: 10px;
  grid-auto-flow: column;
  justify-content: end;
`;

export const A = styled.a`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 10px;
`;

export const WrapperHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.blue2};
  display: grid;
  height: 100px;
`;

export const H3 = styled.h3`
  align-self: center;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 10px;
`;

export const Navigation = styled.div`
  align-items: center;
  align-self: end;
  display: grid;
  gap: 5px;
  grid-auto-flow: column;
  justify-content: start;
  margin-left: 10px;
`;

export const Paragraph = styled.p`
  background-color: ${({ theme }) => theme.colors.whiteTransparent};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 13px;
  padding: 4px 10px;
`;

export const Link = styled.span`
  background-color: ${({ theme, active }) => (active ? theme.colors.white : '')};
  border-radius: 3px 3px 0 0;
  color: ${({ theme, active }) => (active ? theme.colors.black : theme.colors.white)};
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  height: 100%;
  padding: 4px 10px;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme, active }) => (active ? '' : theme.colors.whiteTransparent)};
  }
`;
