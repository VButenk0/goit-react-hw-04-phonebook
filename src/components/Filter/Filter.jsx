import React from 'react';
import { StyledSearch } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <br />
      <StyledSearch
        id="filter"
        type="text"
        value={filter}
        onChange={onChange}
      />
    </>
  );
};
