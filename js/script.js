'use strict';

const rundomGame = function () {
    alert('Угадай число от 1 до 100');

    const isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    const getRandomInt = function () {
        let min = Math.ceil(1),
            max = Math.floor(101);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const randomInt = getRandomInt();

    const main = function () {
        let number = prompt('Введите число: ');

        const resaltFunc = function () {
            if (number === null) {
                alert('Игра окончена');
            } else if (!isNumber(parseFloat(number))) {
                alert('Это не число. Введите число: ');
                main();
            } else if (parseFloat(number) == randomInt) {
                alert('Поздравляю, Вы угадали!!!');
            } else if (parseFloat(number) > randomInt) {
                alert('Загаданное число меньше.');
                main();
            } else {
                alert('Загаданное число больше.');
                main();
            }
        };

        return resaltFunc();
    };

    main();
};
rundomGame();