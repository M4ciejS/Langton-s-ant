var canvas;
var interval;
var ctx;
var gra = 0;
var ANIMSPEED = 5;
var WIDTH = 600;
var HEIGHT = 400;
//snake creation
var fieldsize = 2;//wielkosc pola w pixelach
var field = new Array();
var antx, anty;
var kierunek = 0;
function init() {
    canvas = document.getElementById("canvas2");
    ctx = canvas.getContext("2d");
    antx = 300;
    anty = 200;
    ctx.fillStyle = "#ffffff";
    rect(0, 0, WIDTH, HEIGHT);
    interval = setInterval(mainLoop, ANIMSPEED);
}
function rect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
}
function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}
function moveant() {
    var p = ctx.getImageData(antx, anty, 1, 1).data;
    //window.clearInterval(interval);
    if (p[0] != "255") {
        if (kierunek > 0) {
            kierunek--;
        } else {
            kierunek = 3;
        }
        ctx.fillStyle = "#ffffff";
        rect(antx, anty, fieldsize, fieldsize);
    } else {
        if (kierunek < 3) {
            kierunek++;
        } else {
            kierunek = 0;
        }

        ctx.fillStyle = "#000000";
        rect(antx, anty, fieldsize, fieldsize);
        // window.clearInterval(interval);
    }
    switch (kierunek) {
        case 0:
            antx += fieldsize;
            break;
        case 1:
            anty -= fieldsize;
            break;
        case 2:
            antx -= fieldsize;
            break;
        case 3:
            anty += fieldsize;
            break;
    }
}
function mainLoop() {
    moveant();
}
document.addEventListener('DOMContentLoaded', function () {
    init();
});