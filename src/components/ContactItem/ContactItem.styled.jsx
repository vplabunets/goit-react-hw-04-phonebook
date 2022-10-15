import styled from 'styled-components';

export const ContactItemLi = styled.li`
  display: flex;
  padding: 5px;
  justify-content: space-between;
  &:not(:last-child) {
  }
`;
export const ContactButton = styled.button`
  align-self: center;
  justify-content: center;

  transition: background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: #0fece1;
    border-radius: 2px;
  }
`;
