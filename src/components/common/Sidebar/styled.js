import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  align-content: start;
  background-color: ${({ theme }) => theme.colors.gray2};
  display: grid;
  gap: 10px;
  justify-items: start;
  min-height: 100vh;
  padding: 20px;
  width: 250px;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.blue3};
  font-size: 13px;
`;
