'use strict';

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const getRandomInt = function () {
    let min = Math.ceil(1),
        max = Math.floor(101);
    return Math.floor(Math.random() * (max - min)) + min;
}; 

const randomInt = getRandomInt();

alert('Угадай число от 1 до 100');

const fin = function () {
    let number = prompt('Введите число: '),
        result;

    const resaltFunc = function () {
        if(number === null) {
            alert('Игра окончена');
        } else if (!isNumber(parseFloat(number))) {
            alert('Это не число. Введите число: ');
            fin();
        } else if(parseFloat(number) == randomInt){
            alert('Поздравляю, Вы угадали!!!');
        } else if(parseFloat(number) > randomInt){
            result = alert('Загаданное число меньше.');
            fin();
        } else {
            result = alert('Загаданное число больше.');
            fin();
        }
    };

    return resaltFunc();
};

fin();
