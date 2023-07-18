import {FormInputPropsType} from "../FormInput/FormInput.tsx";
import {FieldValues} from "react-hook-form";

export type FormInputType<T extends FieldValues> = Omit<FormInputPropsType<T>, "error" | "register">

export interface CustomFormPropsType<T extends FieldValues>{
    submitTitle: string
    onSubmit: (data:T) => void
    forms: FormInputType<T>[]
}