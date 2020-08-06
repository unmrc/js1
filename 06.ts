let amount = +prompt('Введите количество USD: ');

let cur = prompt('Введите валюту (EUR, UAH, AZN)');

const EUR = 0.84;
const UAH = 27.7;
const AZN = 1.7;

switch (cur) {
    case 'EUR': 
        alert(amount * EUR)
        break;

    case 'UAH': 
        alert(amount * UAH)
        break;

    case 'AZN':
        alert(amount * AZN)
        break;

    default:
        alert('Нет такой валюты.')
        break;
}