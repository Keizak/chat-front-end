const userNameOptions = {
    required: "Это поле обязательно",
    pattern: {
        value: /^[а-яА-Яa-zA-Z0-9]+$/,
        message: "Имя пользователя должно состоять только из букв и цифр",
    },
};

export const userNameField = {
    formName: "userName",
    title: "Имя пользователя",
    options: userNameOptions,
}