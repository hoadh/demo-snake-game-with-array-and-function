
// Biến toàn cục (Global variable)
// Khai báo bên ngoài hàm

let square_side = 50;
let xPosition = 0, yPosition = 0;
let dx = 5, dy = 0;
let game_loop_time = 20; // ms

function start_game() {
    let game = [
        [ 0, 0, 0, 0, 0 ], // row = 0
        [ 0, 0, 0, 0, 0 ], // row = 1
        [ 0, 0, 0, 0, 0 ], // row = 2
        [ 0, 0, 0, 0, 0 ], // row = 3
        [ 0, 0, 0, 0, 0 ], // row = 4
    ];

    let square_count = game.length; // đếm có bao nhiêu ô vuông (hàng)
 
    let screen_side = 100 * square_count;

    let myCanvas = document.getElementById("game_screen"); // tham chiếu đến canvas trên màn hình
    
    myCanvas.width = screen_side;
    myCanvas.height = screen_side;

    let context = myCanvas.getContext("2d");
    context.fillStyle = "green"; // màu nền

    // Rectangle
    // Vẽ giữa màn hình game
    xPosition = yPosition = myCanvas.width / 2 - square_side / 2;

    context.fillRect(xPosition, yPosition, square_side, square_side);
}


function moveRect() {
    let myCanvas = document.getElementById("game_screen"); // tham chiếu đến canvas trên màn hình
    let context = myCanvas.getContext("2d");
    context.fillStyle = "green"; // màu nền

    xPosition += dx;
    yPosition += dy;

    context.clearRect(0, 0, 500, 500); // xóa toàn bộ màn hình game
    context.fillRect(xPosition, yPosition, 50, 50);
}

let game_loop = setInterval(moveRect, game_loop_time );

function controlDirection(event) {

    let KEY_UP = 38;
    let KEY_DOWN = 40;
    let KEY_RIGHT = 39;
    let KEY_LEFT = 37;

    switch (event.keyCode) {
        case KEY_RIGHT:
            dx = 5;
            dy = 0;
            break;
        case KEY_LEFT:
            dx = -5;
            dy = 0;
            break;
        case KEY_UP:
            dx = 0;
            dy = -5;
            break;
        case KEY_DOWN:
            dx = 0;
            dy = 5;
            break;
    }
}

window.addEventListener("keydown", controlDirection);