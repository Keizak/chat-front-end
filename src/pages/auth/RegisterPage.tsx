import {CustomForm,FormInputType} from "../../shared/components";
import {useRegisterMutation} from "../../service/auth/auth-api.ts";
import {SubmitHandler} from "react-hook-form";
import {RegisterFormType} from "../../service/auth/types.ts";
import {userNameField,phoneField,passwordField} from "../../shared/constants";


export const RegisterPage = () => {
    const registerMutation = useRegisterMutation();
    const onSubmit: SubmitHandler<RegisterFormType> = (data:RegisterFormType) => {
        registerMutation.mutate(data);
    };

    const forms: FormInputType<RegisterFormType>[] = [userNameField,passwordField,phoneField]

    return <CustomForm<RegisterFormType> onSubmit={onSubmit} submitTitle={"Регистрация"} forms={forms}/>
}