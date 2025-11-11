const body = document.querySelector(`body`);
body.style.backgroundColor = `tan`;

const canvasSizeNum = 500;
const canvasSize = canvasSizeNum + `px`;

const canvas = document.createElement(`div`);
canvas.style.width = canvasSize;
canvas.style.height = canvasSize;
canvas.style.border = `solid 2px black`;
body.appendChild(canvas);

