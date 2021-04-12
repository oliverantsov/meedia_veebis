let canvas;
let ctx;
let canvas_height = 540;
let canvas_width = 960;

function init_draw() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "#87ceff";
    ctx.fillRect(0, 0, canvas_width, canvas_height);
    //-----------------
    /*draw_rect();
    draw_circle();
    draw_line();
    draw_pacman();*/
    //-----------------
    draw_grass();
    draw_sun();
    draw_house();
    draw_trees();
}

function draw_grass() {
    ctx.strokeStyle = "green";
    ctx.fillStyle = "green";
    ctx.lineWidth = 4;
    ctx.beginPath();
        for (let i = 0; i < canvas_width; i = i+25) {
            ctx.moveTo(i, 540);
            ctx.bezierCurveTo(0, 390, 25, 390, 25, 540);
            ctx.stroke();
            ctx.fill();
        }
        //ctx.moveTo(0, 540);
        
    ctx.closePath();
    ctx.stroke();
}

function draw_sun() {
    ctx.strokeStyle = "yellow";
    ctx.fillStyle = "yellow";
    ctx.lineWidth = 4;
    ctx.beginPath();
        ctx.arc(40, 40, 25, 0, 2 * Math.PI);
        ctx.moveTo(40, 80);
        ctx.lineTo(40, 140);
        ctx.moveTo(65, 70);
        ctx.lineTo(110, 125);
        ctx.moveTo(80, 35);
        ctx.lineTo(200, 35);
        ctx.moveTo(70, 5);
        ctx.lineTo(80, 0);
        ctx.stroke();
        ctx.fill();
    ctx.closePath();
}

function draw_house() {
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.lineWidth = 4;
    ctx.beginPath();
        //ctx.rect(10, 300, 60, 40);
        ctx.fillRect(10, 355, 130, 70);
        ctx.fillRect(122, 325, 18, 30);
        ctx.fillStyle = "white";
        ctx.fillRect(20, 365, 25, 50);
        ctx.fillRect(95, 365, 25, 50);
        //ctx.moveTo(138, 355);
        //ctx.lineTo(140, 325);
        //ctx.stroke();
    ctx.closePath();
}

function draw_trees() {
    ctx.strokeStyle = "brown";
    ctx.fillStyle = "brown";
    ctx.lineWidth = 6;
    ctx.beginPath();
        ctx.fillRect(320, 300, 10, 150);
        ctx.fillRect(880, 330, 10, 200);
        ctx.fillStyle = "green";
        ctx.arc(325, 275, 45, 0, 2 * Math.PI);
        ctx.arc(885, 330, 60, 0, 2 * Math.PI);
        ctx.fill();
    ctx.closePath();
}




//-----------------------------------------------------------------------------------------------------
// TUNNITÖÖ ASJAD
//-----------------------------------------------------------------------------------------------------
function draw_pacman() {
    ctx.beginPath();
        ctx.arc(800, 110, 100, .1 * Math.PI, 1.9 * Math.PI);
        ctx.lineTo(800, 110);
        //ctx.stroke();
        ctx.fill();
    ctx.closePath();
}

function draw_line() {
    ctx.beginPath();
        ctx.moveTo(200, 0);
        ctx.lineTo(200, 180);
        //quadratic    kontrollpunkti x, kontrollpunkti y, x, y
        ctx.quadraticCurveTo(480, 270, 200, 360);
        //bezier    kontrollpunkti x, kontrollpunkti y, 2kontrollpunkti x, 2kontrollpunkti y, x, y
        ctx.bezierCurveTo(400, 400, 0, 450, 200, 540);
        ctx.stroke();
    ctx.closePath();
}

function draw_circle() {
    ctx.fillStyle = "rgba(255, 255, 0, 0.5)";
    ctx.beginPath();
        //kaar ehk arc    x, y, r, algusnurk  lõpunurk
        ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function draw_rect() {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 6;
    ctx.fillStyle = "#FFAAAA";

    //x, y, w, h
    ctx.beginPath();
        ctx.rect((canvas.width - 200) / 2, (canvas.height - 100) / 2, 200, 100);
    ctx.closePath();
    //ctx.stroke();
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = "green";
    ctx.fillStyle = "#AAFFAA";
    ctx.beginPath();
        ctx.rect((canvas.width - 200) / 2 + 200 + 6, (canvas.height - 100) / 2, 200, 100);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = "magenta";
    ctx.strokeRect((canvas.width - 200) / 2, (canvas.height - 100) / 2 - 100 - 6, 200, 100);
    ctx.fillStyle = "#FFFF00";
    ctx.fillRect((canvas.width - 200) / 2, (canvas.height - 100) / 2 + 100 + 6, 200, 100);
}