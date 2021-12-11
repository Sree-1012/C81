canvas = document.getElementById("MyCanvas");
ctx=canvas.getElementById("2d");

color="green";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,20,0,2*Math.PI);
ctx.stroke();

canvas.addEventListner("mousedown", my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + ",Y = " + mouse_y);
    circle(mouse_x,mouse_y);

}

function circle(mouse_x,mouse_y);
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,20,0,2*Math.PI);
ctx.stroke();
}

function cleararea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}