import PropTypes from 'prop-types';
import {
  StyledButton,
  StyledContactItem,
  StyledContactList,
  StyledUser,
} from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => (
  <StyledContactList>
    {contacts.map(({ id, name, number }) => {
      return (
        <StyledContactItem key={id}>
          <StyledUser>
            {name}:{number}
          </StyledUser>
          <StyledButton type="button" onClick={() => deleteContact(id)}>
            Delete
          </StyledButton>
        </StyledContactItem>
      );
    })}
  </StyledContactList>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
