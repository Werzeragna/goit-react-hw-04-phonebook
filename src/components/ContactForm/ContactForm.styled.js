import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  align-items: center;
  margin: 0 auto;
`;

export const StyledInput = styled.input`
  max-width: 300px;
  border: 2px solid #b4b4b4;
  border-radius: 8px;
  outline: #b4b4b4;
  margin-bottom: 10px;
  padding-left: 8px;
  transition: border 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    border: 2px solid gray;
  }
`;

export const StyledButton = styled.button`
  padding: 3px;
  background-color: lightgray;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: gray;
  }
`;
