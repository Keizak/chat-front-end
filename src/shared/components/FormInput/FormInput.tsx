import {UseFormRegister, RegisterOptions, FieldValues, Path} from "react-hook-form";
import styled from "styled-components";
import {FieldError} from "react-hook-form";

export type FormInputPropsType<T extends FieldValues> = {
    title: string
    formName: string
    options?: RegisterOptions
    register: UseFormRegister<T>
    error: FieldError | undefined
}

export function FormInput<T extends FieldValues>({register, error, title, formName, options}: FormInputPropsType<T>) {
    return (
        <InputContainer>
            <span>{title}</span>
            <StyledInput {...register(formName as Path<T>, options)}/>
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
  color: red`
