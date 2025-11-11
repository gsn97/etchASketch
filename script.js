const makeDiv = (document.createElement(`div`));

const body = document.querySelector(`body`);
body.style.backgroundColor = `tan`;

const canvasSizeNum = 500;
const canvasSize = canvasSizeNum + `px`;

let rowAmount = 10;

const canvas = makeDiv;
canvas.style.width = canvasSize;
canvas.style.height = canvasSize;
canvas.style.border = `solid 2px black`;
body.appendChild(canvas);

function loadCell () {
    const cell = makeDiv;
    const cellSize = (canvasSizeNum / rowAmount) + `px`;
    cell.style.width = cellSize;
    cell.style.height = cellSize;
    cell.style.backgroundColor = `white`;
    canvas.appendChild(cell); 
};

