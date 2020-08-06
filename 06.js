var amount = +prompt('Введите количество USD: ');
var cur = prompt('Введите валюту (EUR, UAH, AZN)');
var EUR = 0.84;
var UAH = 27.7;
var AZN = 1.7;
switch (cur) {
    case 'EUR':
        alert(amount * EUR);
        break;
    case 'UAH':
        alert(amount * UAH);
        break;
    case 'AZN':
        alert(amount * AZN);
        break;
    default:
        alert('Нет такой валюты.');
        break;
}
