let services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн",

    // Метод для обчислення загальної вартості наданих послуг
    price: function() {
        let total = 0;
        for (let service in this) {
            if (typeof this[service] === 'string' && !isNaN(parseFloat(this[service]))) {
                total += parseFloat(this[service]);
            }
        }
        return total;
    },

    // Метод для знаходження мінімальної вартості
    minPrice: function() {
        let min = Infinity;
        for (let service in this) {
            if (typeof this[service] === 'string' && !isNaN(parseFloat(this[service]))) {
                min = Math.min(min, parseFloat(this[service]));
            }
        }
        return min;
    },

    /// Метод для знаходження максимальної вартості
    maxPrice: function() {
        let max = -Infinity;
        for (let service in this) {
            if (typeof this[service] === 'string' && !isNaN(parseFloat(this[service]))) {
                max = Math.max(max, parseFloat(this[service]));
            }
        }
        return max;
    }
};

console.log("Загальна вартість послуг: " + services.price() + " грн");
console.log("Мінімальна вартість послуг: " + services.minPrice() + " грн");
console.log("Максимальна вартість послуг: " + services.maxPrice() + " грн");
