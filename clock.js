setInterval(printTime, 1000)  // вызывает заданную функцию с заданным интервалом в мс

const t = setInterval(move, 20);
let pos = 0;
let i = 1;
let x = 0; // Начальная позиция по X
let y = 0; // Начальная позиция по Y
let dx = 2; // Скорость по X
let dy = 2; // Скорость по Y

function printTime() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const time =`${h >= 10 ? h : '0' + h}: ${m >= 10 ? m : '0' + m}: ${s >= 10 ? s : '0' + s}`;
    const h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(time));
    if(root.firstElementChild) {
        root.replaceChild(h1, root.firstElementChild)
    } else {
        root.appendChild(h1);
    }
    //root.appendChild(h1); // добавили ID = root в HTML. поэтому можно не создавать переменную
}

function move() {
    const containerRect = container.getBoundingClientRect();
    const rootRect = root.getBoundingClientRect();

    if (rootRect.left <= containerRect.left) {
        x = 0; // Принудительно возвращаем элемент внутрь
        dx = getRandomDirection(); // Случайное направление
    }
    if (rootRect.right >= containerRect.right) {
        x = containerRect.width - rootRect.width; // Принудительно возвращаем элемент внутрь
        dx = getRandomDirection();
    }
    if (rootRect.top <= containerRect.top) {
        y = 0;
        dy = getRandomDirection();
    }
    if (rootRect.bottom >= containerRect.bottom) {
        y = containerRect.height - rootRect.height;
        dy = getRandomDirection();
    }

    // Обновляем позиции
    x += dx;
    y += dy;

    root.style.transform = `translate(${x}px, ${y}px)`;

    function getRandomDirection() {
        const directions = [-2, -1, 1, 2];
        return directions[Math.floor(Math.random() * directions.length)];
    }

        // if(pos > 300 || pos < 0) {
        //     i = -i;
        // }
        // pos = pos + i;
        // root.style.top = pos + 'px';
        // root.style.left = pos + 'px';
}