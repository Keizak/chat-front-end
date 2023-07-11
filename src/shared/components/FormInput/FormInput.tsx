// @ts-ignore
import {RegisterOptions} from "react-hook-form/dist/types/validator";
// @ts-ignore
import {UseFormRegister} from "react-hook-form/dist/types/form";
import styled from "styled-components";
import {FieldError} from "react-hook-form";

type FormInputPropsType = {
    title:string
    formName: string,
    options? :RegisterOptions
    register:UseFormRegister
    error:  FieldError | undefined
}
export const FormInput = ({register,error,title,formName,options}:FormInputPropsType) => {
    return (
        <InputContainer>
            <span>{title}</span>
            <StyledInput {...register(formName, options)}/>
            {error && <ErrorSpan>{error.message}</ErrorSpan>}
        </InputContainer>)
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80px;
`
const StyledInput = styled.input`
  display: block;
  width: 80%;
  height: 25px;
  border-radius: 5px;
  margin: 0 0 5px 0;
`

const ErrorSpan = styled.span`
  align-self: flex-start;
  margin-left: 50px;
color:red`
