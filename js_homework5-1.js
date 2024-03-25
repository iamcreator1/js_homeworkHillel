// Створюємо об'єкт з трьома властивостями
let myObject = {
    name: "John",
    age: 30,
    profession: "developer",

    // Метод getInfo, що виводить інформацію про всі властивості об'єкта
    getInfo: function() {
        let info = "";
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                info += key + ": " + this[key] + "\n";
            }
        }
        console.log(info);
    }
};

// Викликаємо метод getInfo для першого разу
console.log("Інформація про об'єкт до додавання нових властивостей:");
myObject.getInfo();

// Додаємо нову властивість до об'єкта
myObject.newProperty = 'Нова властивість!';

// Викликаємо метод getInfo ще раз для перевірки
console.log("\nІнформація про об'єкт після додавання нових властивостей:");
myObject.getInfo();



