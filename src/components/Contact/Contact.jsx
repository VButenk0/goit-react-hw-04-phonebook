import React from 'react';
import { StyledListItem, StyledText, StyledButton } from './Contact.styled';

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <StyledListItem>
      <StyledText>
        {name}: {number}
      </StyledText>
      <StyledButton type="button" onClick={() => onDelete(id)}>
        Delete
      </StyledButton>
    </StyledListItem>
  );
};
