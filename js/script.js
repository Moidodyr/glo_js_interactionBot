'use strict';


const randomGame = function () {
    const isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    const getRandomInt = function () {
        let min = Math.ceil(1),
            max = Math.floor(101);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const randomInt = getRandomInt(),
        introduction = alert('Угадай число от 1 до 100');


    const mainFunc = function () {
        let number = prompt('Введите число: ');

        if (parseFloat(number) == randomInt) {
            console.log('randomInt: ', randomInt);
            console.log('isNumber(parseFloat(number)): ', isNumber(parseFloat(number)));
            alert('Поздравляю, Вы угадали!!!');
        } else if (number == null) {
            alert('Игра окончена!');
        } else if (!isNumber(parseFloat(number))) {
            alert('Это не число!');
            mainFunc();
        } else if(parseFloat(number) > randomInt){
            alert('Загаданное число меньше.');
            mainFunc();
        } else if('Загаданное число больше.') {
            alert('Загаданное число больше.');
            mainFunc();
        }

    };

    mainFunc();
};
randomGame();