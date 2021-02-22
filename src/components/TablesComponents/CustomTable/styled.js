import styled from 'styled-components/macro';

export const CustomTable = styled.table`
  border-collapse: collapse;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 30px;
  text-align: center;
`;

export const Th = styled.th`
  background-color: ${({ theme }) => theme.colors.blue1};
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.colors.white};
  padding: 15px;
`;

export const Td = styled.td`
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  padding: 8px;
`;

export const Tr = styled.tr`
  :nth-child(even) {
    background-color: ${({ theme }) => theme.colors.gray2};
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.gray1};
  }
`;

export const FootTd = styled.td`
  background-color: ${({ theme }) => theme.colors.blue1};
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.colors.white};
  padding: 15px;
`;
