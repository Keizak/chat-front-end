import {useLoginMutation} from "../../service/auth/auth-api.ts";
import {SubmitHandler} from "react-hook-form";
import {LoginFormType} from "../../service/auth/types.ts";

import {CustomForm, FormInputType} from "../../shared/components";

import {passwordField, userNameField} from "../../shared/constants";
import {useNavigate} from "react-router-dom";


export const LoginPage = () => {
    const navigate = useNavigate()
    const registerMutation = useLoginMutation();
    const onSubmit: SubmitHandler<LoginFormType> = (data: LoginFormType) => {
        registerMutation.mutate(data);
    };

    const registerClickHandler = () => navigate("/register")

    const forms: FormInputType<LoginFormType>[] = [userNameField, passwordField]

    return <>
        <button onClick={registerClickHandler}>Регистрация</button>
        <CustomForm<LoginFormType> onSubmit={onSubmit} submitTitle={"Войти"} forms={forms}/>

    </>
}