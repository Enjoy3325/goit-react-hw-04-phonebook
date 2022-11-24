import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';
import { ButtonCard, Text } from './CardContact.styled';
import React from 'react';

export const CardContact = ({ id, name, number, handlDeleteContacts }) => {
  return (
    <li>
      <Text>
        {name}: {number}
      </Text>

      <ButtonCard
        type="button"
        onClick={() => {
          handlDeleteContacts(id);
        }}
      >
        <FiTrash2 />
      </ButtonCard>
    </li>
  );
};

CardContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handlDeleteContacts: PropTypes.func.isRequired,
};
