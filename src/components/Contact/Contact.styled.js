import styled from 'styled-components';

export const StyledListItem = styled.li`
  font-size: 14px;
`;

export const StyledText = styled.p`
  display: inline;
  padding-right: 10px;
  margin: 0;
`;

export const StyledButton = styled.button`
  font-size: 10px;

  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 2px 5px;
  cursor: pointer;

  &:focus {
    color: white;
    background-color: rgb(65, 87, 233);
  }
`;
