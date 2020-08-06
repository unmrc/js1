let amount = +prompt('Введите сумму: ');

if (amount >= 200 && amount < 300) {
    alert(amount * 0.03);
}
else if (amount >= 300 && amount < 500) {
    alert(amount * 0.05);
}
else if (amount > 500) {
    alert(amount * 0.07);
}