import styled from 'styled-components';

export const StyledLabel = styled.label``;

export const StyledInput = styled.input`
  border-radius: 8px;
  border: 2px solid #b4b4b4;
  outline: #b4b4b4;
  padding-left: 8px;
  margin-bottom: 10px;
  transition: border 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    border: 2px solid gray;
  }
`;
