import {FieldError, FieldErrors, FieldValues, useForm, UseFormRegister} from "react-hook-form";
import {FormInput, FormInputPropsType} from "../FormInput/FormInput.tsx";
import {FormContainer, FormStyledButton} from "./styled-components.ts";
import {CustomFormPropsType, FormInputType} from "./types.ts";


export function CustomForm<T extends FieldValues>({submitTitle, onSubmit, forms}: CustomFormPropsType<T>) {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<T>();

    const createDisplayForms = (forms: FormInputType<T>[], errors: FieldErrors<T>, register: UseFormRegister<T>): FormInputPropsType<T>[] => {
        return forms.map(form => ({...form, register, error: errors[form.formName] as FieldError | undefined}))
    }

    const displayForms = createDisplayForms(forms, errors, register)

    return (
        <FormContainer flexDirection={"column"}>
            <form onSubmit={handleSubmit(onSubmit)} style={{width: "80%"}}>
                {displayForms.map((form,index) => <FormInput {...form} key={form.formName+ index}/>)}
                <FormStyledButton type={"submit"}>{submitTitle}</FormStyledButton>
            </form>
        </FormContainer>
    );
}

