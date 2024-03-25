// Масив об'єктів з email адресами
var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

// Регулярний вираз для перевірки адреси електронної пошти
var emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(?:gmail\.com|yahoo\.com)$/;

// Фільтрація масиву за допомогою регулярного виразу
var trustedEmails = arr.filter(function(obj) {
    return emailRegex.test(obj.email);
});

// Виведення результату
console.log(trustedEmails);
