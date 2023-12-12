import React from 'react';
import { nanoid } from 'nanoid';
import { Contact } from 'components/Contact/Contact';
import { StyledList } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <StyledList>
      {contacts.map(contact => (
        <Contact key={nanoid()} {...contact} onDelete={onDelete} />
      ))}
    </StyledList>
  );
};
