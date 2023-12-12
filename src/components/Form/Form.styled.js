import styled from 'styled-components';

export const StyledForm = styled.form`
  border: 1px solid black;
  padding: 10px;
  width: 350px;
`;

export const StyledInput = styled.input`
  border: 1px solid lightgray;
  margin-bottom: 20px;

  &:focus {
    border: 4px solid rgb(65, 87, 233, 0.5);
    border-radius: 5px;
    outline: none;
  }
`;

export const StyledButton = styled.button`
  font-size: 10px;

  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 2px 7px;
  cursor: pointer;

  &:focus {
    color: white;
    background-color: rgb(65, 87, 233);
  }
`;
