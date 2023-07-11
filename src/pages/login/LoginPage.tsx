import {FlexBlock} from "../../shared/styled-components";
import {SubmitHandler, useForm} from "react-hook-form";
import styled from "styled-components";
import {FormInput} from "../../shared/components/FormInput/FormInput.tsx";
import {useRegisterMutation} from "../../service/login-api.ts";

export type LoginFormType = {
    userName: string;
    password: string;
    phone: string;
};

export const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormType>();

    const registerMutation = useRegisterMutation();
    const onSubmit: SubmitHandler<LoginFormType> = (data) => {
        registerMutation.mutate(data);
    };

    const userNameOptions = {
        required: "Это поле обязательно",
        pattern: {
            value: /^[а-яА-Яa-zA-Z0-9]+$/,
            message: "Имя пользователя должно состоять только из букв и цифр",
        },
    };

    const phoneOptions = {
        required: "Это поле обязательно",
        pattern: {
            value: /^(\+?((3|7)\d{2}|(4|5)\d{3}))?[-()\s]?(\d{2,4}[-()\s]?){2}\d{2,4}$/,
            message: "Введите корректный номер телефона",
        },
    };

    const passwordOptions = {
        required: "Это поле обязательно",
        minLength: {
            value: 6,
            message: "Пароль должен состоять минимум из 6 символов",
        },
    };

    return (
        <LoginContainer flexDirection={"column"}>
            <form onSubmit={handleSubmit(onSubmit)} style={{width:"80%"}}>
                <FormInput
                    formName={"userName"}
                    register={register}
                    title={"Имя пользователя"}
                    options={userNameOptions}
                    error={errors.userName}
                />
                <FormInput
                    formName={"phone"}
                    register={register}
                    title={"Телефон"}
                    options={phoneOptions}
                    error={errors.phone}
                />
                <FormInput
                    formName={"password"}
                    register={register}
                    title={"Пароль"}
                    options={passwordOptions}
                    error={errors.password}
                />
                <StyledButton type={"submit"}>Регистрация</StyledButton>
            </form>
        </LoginContainer>
    );
};

const LoginContainer = styled(FlexBlock)`
  background: #dad8d8;
  padding: 20px;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 400px;
  border-radius: 20px;
`;

const StyledButton = styled.button`
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