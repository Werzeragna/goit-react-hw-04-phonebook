import PropTypes from 'prop-types';
import { StyledInput, StyledLabel } from './Filter.styled';

export const Filter = ({ filter, changeFilterInput }) => (
  <StyledLabel>
    <StyledInput
      type="text"
      name={filter}
      onChange={changeFilterInput}
      placeholder="Find contacts by name"
    />
  </StyledLabel>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};
