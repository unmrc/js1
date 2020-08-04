let age = +prompt('Укажите возраст');

    if (age >= 0 && age < 2) {
        alert('Ребенок');
    }
    else if (age >= 12 && age < 18) {
        alert('подросток');
    }
    else if (age >= 18 && age < 60) {
        alert('Взрослый');
    }
    else if (age >= 60) {
        alert('пенсионер');
    }