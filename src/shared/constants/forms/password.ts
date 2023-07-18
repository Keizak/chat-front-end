const passwordOptions = {
    required: "Это поле обязательно",
    minLength: {
        value: 6,
        message: "Пароль должен состоять минимум из 6 символов",
    },
};
export const passwordField = {
    formName: "password",
    title: "Пароль",
    options: passwordOptions,
}