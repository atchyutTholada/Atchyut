var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var isDrawing = false;
var currentX = 0;
var currentY = 0;
canvas.addEventListener('mousedown', function(e){
    isDrawing = true;
    currentX = e.clientX - this.offsetLeft;
    currentY = e.clientY - this.offsetTop;
});

canvas.addEventListener('mousemove',function(e){
    if(isDrawing === true){
        draw(currentX,currentY, e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        currentX = e.clientX - canvas.offsetLeft;
        currentY = e.clientY - canvas.offsetTop;
    }
});

canvas.addEventListener('mousemove',function(e){
    if(isDrawing === true){
        draw(currentX,currentY, e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        currentX = e.clientX - canvas.offsetLeft;
        currentY = e.clientY - canvas.offsetTop;
}
});
canvas.addEventListener('mouseup', function(){
    isDrawing = false;
});
function draw(x1,  y1, x2, y2){
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();
}