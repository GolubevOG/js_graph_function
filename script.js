console.log('start');

const canvas = document.getElementById("canvasid");
let ctx = canvas.getContext('2d');

let drawCoordPlane = function(step){
    const width = canvas.width;
    const height = canvas.height;
    
    for (let x=0;x<width;x += step){
        ctx.moveTo(x, 0);
        ctx.lineTo(x,height);
    }
    for (let y=0;y<height;y += step){
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
    ctx.stroke();
    }
}


const step = 10;
let a = drawCoordPlane(step);
ctx.stroke();
console.log(a,'hello');




console.log('stop');