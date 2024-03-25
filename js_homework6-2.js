function findValueByKey(companyName) {
    function searchCompany(company, name) {
        if (company.name === name) {
            console.log(company);
            return;
        }
        if (company.clients) {
            for (let client of company.clients) {
                searchCompany(client, name);
            }
        }
    }

    searchCompany(company, companyName);
}

// Приклад використання:
findValueByKey('Клієнт 1.2.3');
