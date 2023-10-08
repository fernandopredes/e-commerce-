import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  margin: .5rem 0;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  background-color: #ff8400;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff5900;
  }
`;

export const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  margin: .5rem 0;
  color: black;
`;
export const ColumnContainer = styled.div`
  display: flex;
`;

export const LeftColumn = styled.div`
  flex: 1;
`;

export const RightColumn = styled.div`
  flex: 1;
`;
