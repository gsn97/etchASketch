const body = document.querySelector(`body`);
body.style.backgroundColor = `tan`;
body.style.display = `flex`;

const canvasSizeNum = 500;
const canvasSize = canvasSizeNum + `px`;

let rowAmount = 16; // grid will be (rowAmount x rowAmount)

const canvas = document.querySelector(`#canvas`);
canvas.style.width = canvasSize;
canvas.style.height = canvasSize;
canvas.style.border = `solid 2px black`;
canvas.style.display = `flex`;
body.appendChild(canvas);

function loadCell () {
    const cell = document.createElement(`div`);
    const cellSize = (canvasSizeNum / rowAmount) + `px`;
    cell.style.width = cellSize;
    cell.style.height = cellSize;
    cell.style.backgroundColor = `white`;
    canvas.appendChild(cell);
};

function loadCanvasGrid () {
    for (i = 1; i <= (rowAmount ** 2); i++) {
        loadCell();
        canvas.lastChild.id = `cellNum` + i;
    };
};

loadCanvasGrid();