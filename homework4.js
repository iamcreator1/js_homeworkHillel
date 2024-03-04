
//////////////homework4_1

function myIsNaN(value) {
    // Проверяем, равно ли значение самому себе (проверка на NaN)
    return value !== value;
}

// пара примеров
console.log(myIsNaN('abc')); // true
console.log(myIsNaN(123));   // false


//////////////homework4_2

function pad(str, symbol, count, toStart) {
    // Проверка, сколько символов нужно добавить
    const needToAdd = count - str.length;
    // Если нужно добавить 0 или отрицательное количество символов, возвращаем исходную строку
    if (needToAdd <= 0) {
        return str;
    }
    
    // Определяем, сколько символов нужно добавить
    const additionalSymbols = symbol.repeat(Math.ceil(needToAdd / symbol.length)).slice(0, needToAdd);
    
    // Добавляем символы либо в начало, либо в конец строки
    return toStart ? additionalSymbols + str : str + additionalSymbols;
}

console.log(pad('qwerty', '+', 10, true));  // "++++++qwerty"
console.log(pad('qwerty', '+', 10, false)); // "qwerty++++++"

//////////////homework4_3

function checkProbabilityTheory(count) {

    let evenCount = 0;
    let oddCount = 0;

    // Генеруємо випадкові числа та рахуємо парні та непарні числа
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    // Виводимо інформацію
    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    
    // Обчислюємо відсоток парних чисел
    const evenPercentage = (evenCount / count) * 100;
    console.log(`Відсоток парних до не парних: ${evenPercentage.toFixed(2)}% : ${(100 - evenPercentage).toFixed(2)}%`);
}

checkProbabilityTheory(1000);
