import styled from "styled-components";
import {FlexBlock} from "../../styled-components";

export const FormContainer = styled(FlexBlock)`
  background: #dad8d8;
  padding: 20px;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 400px;
  border-radius: 20px;
`;

export const FormStyledButton = styled.button`
  color: white;
  margin-top: 10px;
  height: 40px;
  background: #609360;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  padding: 0 20px;

  &:hover {
    background: #507c50;
  }
`;