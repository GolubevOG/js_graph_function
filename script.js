console.log('start');

const canvas = document.getElementById("canvasid");
let ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

let drawCoordPlane = function(step){
        
    for (let x=0;x<width;x += step){
        ctx.moveTo(x, 0);
        ctx.lineTo(x,height);
    }
    for (let y=0;y<height;y += step){
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
    ctx.lineWidth = 1;
    ctx.stroke();
    }
    ctx.closePath();
}

let drawMainAxes = function(){
    ctx.beginPath();
    ctx.moveTo(0, height/2);
    ctx.lineTo(width,height/2);
    ctx.moveTo(width/2, 0);
    ctx.lineTo(width/2, height);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

let drawTextAxes = function (){
    ctx.font = "8px Arial";
    ctx.fillStyle = 'white';
    ctx.fillText('Hello world', 20, 50);
    for (let x =0; x<width; x+= step){
        ctx.fillText(x - 400, x, height/2 + 10);
    }

    for (let y =0; y<height; y+= step){
        ctx.fillText(y - height/2, width/2 - 15, y);
    }
}

const step = 20;
drawCoordPlane(step);
drawMainAxes();
drawTextAxes();


console.log(a,'hello');




console.log('stop');