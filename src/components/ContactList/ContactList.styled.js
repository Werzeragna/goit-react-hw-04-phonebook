import styled from 'styled-components';

export const StyledContactList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  font-size: 20px;
  margin: 0 auto;
  padding: 10px;
  gap: 10px;
`;

export const StyledContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: -2px -2px 2px 2px gray;
  border-radius: 8px;
  transition: box-shadow 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    box-shadow: 2px 2px 2px 2px gray;
  }
`;

export const StyledUser = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-left: 10px;
`;

export const StyledButton = styled.button`
  padding: 5px;
  height: 25px;
  border-radius: 8px;
  background-color: lightgray;
  font-size: 12px;
  font-weight: 600;
  margin-right: 10px;
  transition: background-color 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: gray;
  }
`;
