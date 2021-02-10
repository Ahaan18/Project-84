canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1width = 120;
car1height = 70;
car1img = "car1.png";
car1x = 10;
car1y = 10;
car2width = 120;
car2height = 70;
car2img = "car2.jpg";
car2x = 10;
car2y = 100;
bpicimg = "racing.jpg";
function loadimg(){
    bpicimg1 = new Image();
    bpicimg1.onload = rac;
    bpicimg1.src = bpicimg;
    car1img1 = new Image();
    car1img1.onload = carno1;
    car1img1.src = car1img;
    car2img1 = new Image();
    car2img1.onload = carno2;
    car2img1.src = car2img;
}
function rac(){
    ctx.drawImage(bpicimg1, 0, 0, canvas.width, canvas.height);
}
function carno1(){
    ctx.drawImage(car1img1, car1x, car1y, car1width, car1height);
}
function carno2(){
    ctx.drawImage(car2img1, car2x, car2y, car2width, car2height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed = '38'){
        car1up();
        console.log("car 1 up");
    }
    if(keyPressed = '40'){
        car1down();
        console.log("car 1 down");
    }
    if(keyPressed = '39'){
        car1right();
        console.log("car 1 right");
    }
    if(keyPressed = '37'){
        car1left();
        console.log("car 1 left");
    }
    if(keyPressed = '87'){
        car2up();
        console.log("car 2 up");
    }
    if(keyPressed = '65'){
        car2left();
        console.log("car 2 left");
    }
    if(keyPressed = '83'){
        car2down();
        console.log("car 2 down");
    }
    if(keyPressed = '68'){
        car2right();
        console.log("car 2 right");
    }
}