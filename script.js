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


const step = 10;
let a = drawCoordPlane(step);
let b = drawMainAxes();
ctx.stroke();
console.log(a,'hello');




console.log('stop');