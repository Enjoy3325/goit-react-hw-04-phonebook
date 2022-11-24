import PropTypes from 'prop-types';
import { InputFilter, TextFilter, LabelFilter } from './Filter.styled';
import { nanoid } from 'nanoid';
import React from 'react';

export const Filter = ({ value, onChange }) => {
  return (
    <LabelFilter id={nanoid()}>
      <TextFilter>Find contacts by name</TextFilter>
      <InputFilter type="text" value={value} onChange={onChange} />
    </LabelFilter>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
