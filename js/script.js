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

    let counter = 10,
        qsn,
        qsn2;


    const mainFunc = function () {
        let number = prompt('Введите число: ');

        if (parseFloat(number) == randomInt) {
            qsn = confirm('Поздравляю, Вы угадали!!! Хотите сыграть еще?');
            if (qsn) {
                randomGame();
            } else {
                alert('Игра окончена!');
            }
        } else if (counter == 1) {
            qsn2 = confirm('Попытки закончились, хотите сыграть еще?');
            if (qsn2) {
                randomGame();
            } else {
                alert('Игра окончена!');
            }
        } else if (number == null) {
            alert('Игра окончена!');
        } else if (!isNumber(parseFloat(number))) {
            counter--;
            alert(`Это не число! У вас осталось ${counter} попыток.`);
            mainFunc();
        } else if (parseFloat(number) > randomInt) {
            counter--;
            alert(`Загаданное число меньше. Осталось ${counter} попыток.`);
            mainFunc();
        } else if (parseFloat(number) < randomInt) {
            counter--;
            alert(`Загаданное число больше. Осталось ${counter} попыток`);
            mainFunc();
        }

    };

    mainFunc();
};
randomGame();