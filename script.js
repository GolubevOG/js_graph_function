console.log("start");

const canvas = document.getElementById("canvasid");
let ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const lineStepW = width / 10;
const moveToZeroY = height / 2;
const moveToZeroX = width / 2;

console.log(lineStepW, "lineStepW");

let drawCoordPlane = function(step) {
    ctx.strokeStyle = "grey";
    let count = 0;
    for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        if (count % 5 == 0) {
            ctx.lineWidth = 3;
        } else {
            ctx.lineWidth = 1;
        }
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
        count += 1;
        ctx.closePath();
    }
    for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        if (count % 5 == 0) {
            ctx.lineWidth = 3;
        } else {
            ctx.lineWidth = 1;
        }
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
        count += 1;
        ctx.closePath();
    }
    ctx.closePath();

    drawMainAxes();
};

let drawMainAxes = function() {
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
};

let drawTextAxes = function() {
    ctx.font = "7px Arial";
    ctx.fillStyle = "black";
    for (let x = 0; x < width; x += step) {
        ctx.fillText(x - 400 + 5, x, height / 2 + 10);
    }

    for (let y = 0; y < height; y += step) {
        ctx.fillText(y - height / 2, width / 2 - 19, y);
    }
};

let drawFunctionQuad = function(power) {
    console.log("рисование графика");
    const delta_x = step / 4;
    ctx.beginPath();
    ctx.moveTo(moveToZeroX, moveToZeroY);
    for (let x = -width; x < width; x += delta_x) {
        let y = Math.pow(x / step, power);
        ctx.lineTo(x + width / 2, -1 * y + height / 2);
    }
    ctx.stroke();
};

let clearCanvas = function() {
    console.log("очистка экрана");
    ctx.clearRect(0, 0, width, height);
    drawCoordPlane(step);
};

//рисование координатной плоскости в основной программе
const step = 50;
drawCoordPlane(step);

console.log("stop");