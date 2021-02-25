import styled from 'styled-components/macro';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.blue2};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 15px;
  height: 50px;
  outline: none;
  transition: all .3s;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    transform: scale(1.1);
  }
`;
