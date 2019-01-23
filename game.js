const ul = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = prompt.children[0];

let name = '';
let count = 0;
let num = Math.floor(Math.random() * 100);

printMessage('Введите имя игрока: ');

function printMessage(text) {
    const li = document.createElement('li');

    li.textContent = text;

    ul.appendChild(li)
}

function start(e) {
    e.preventDefault();

    startGame(input.value)

    input.value = '';
}

function startGame(title) {
    if(!title) return;
    if(!name) {
        name = title
        clearOutput()
        printMessage(`${name}, загадано число от 0 до 100. Попробуй отгадать его. `)
        return;
    }

    let guess = Number.parseInt(title);

    if(Number.isNaN(guess)) return;

    if(guess < num) {
        printMessage(`Мало. Попробуйте еще раз.`);
        count += 1;
    } else if(guess > num) {
        printMessage(`Много. Попробуйте еще раз`);
        count += 1;
    } else {
        printMessage(`Поздравляю!`);
        printMessage(`Вы отгадали число.`);
        printMessage(`Правильный ответ ${num}`);
        printMessage(`Количество попыток: ${count}`);
        prompt.remove()
    }
}

function clearOutput() {
    for (let index = 0; index < ul.children.length; index++) {
        ul.removeChild(ul.children[index])
    }
}

prompt.addEventListener('submit', start);