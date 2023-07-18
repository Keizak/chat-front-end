const phoneOptions = {
    required: "Это поле обязательно",
    pattern: {
        value: /^(\+?((3|7)\d{2}|(4|5)\d{3}))?[-()\s]?(\d{2,4}[-()\s]?){2}\d{2,4}$/,
        message: "Введите корректный номер телефона",
    },
};


export const phoneField = {
    formName: "phone",
    title: "Телефон",
    options: phoneOptions,
}