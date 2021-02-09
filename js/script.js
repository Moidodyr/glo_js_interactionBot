'use strict';

const rundomGame = function () {
    alert('Угадай число от 1 до 100');

    let counter = 10,
        qsn;

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
            } else if (counter == 1) {
                qsn = confirm('Вы не угадали. Количество попыток закончено. Хотите сыгать еще?');
                if (qsn) {
                    counter = 10;
                    main();
                } else {
                    alert('Игра окончена');
                }
            } else if (!isNumber(parseFloat(number))) {
                counter--;
                alert(`Это не число. Осталось ${counter} попыток. Введите число: `);
                main();
            } else if (parseFloat(number) == randomInt) {
                alert('Поздравляю, Вы угадали!!!');
                qsn = confirm('Вы победитель! Хотите сыгать еще?');
                if (qsn) {
                    counter = 10;
                    main();
                } else {
                    alert('Игра окончена');
                }
            } else if (parseFloat(number) > randomInt) {
                counter--;
                alert(`Загаданное число меньше. Осталось ${counter} попыток.`);
                main();
            } else {
                counter--;
                alert(`Загаданное число больше. Осталось ${counter} попыток.`);
                main();
            }
        };

        return resaltFunc();
    };

    main();
};
rundomGame();