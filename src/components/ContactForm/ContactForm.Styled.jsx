import styled from 'styled-components';

const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-self: center;
  align-items: center;
`;
const FormWrap = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  margin: 0 auto;
  align-self: center;
  align-items: flex-end;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-bottom: 10px;
`;
const FormInput = styled.input`
  display: flex;
`;
const FormButton = styled.button`
  align-self: center;
  justify-content: center;
  width: 150px;
  transition: background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: #0fece1;
    border-radius: 2px;
  }
`;

export { FormEl, FormWrap, FormLabel, FormInput, FormButton };
