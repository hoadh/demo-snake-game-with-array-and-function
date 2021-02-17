
// Biến toàn cục (Global variable)
// Khai báo bên ngoài hàm
let xPosition = 0;
let dx = 5;

function start_game() {
    let game = [
        [ 0, 0, 0, 0, 0 ], // row = 0
        [ 0, 0, 0, 0, 0 ], // row = 1
        [ 0, 0, 0, 0, 0 ], // row = 2
        [ 0, 0, 0, 0, 0 ], // row = 3
        [ 0, 0, 0, 0, 0 ], // row = 4
    ];

    let square_count = game.length; // đếm có bao nhiêu ô vuông (hàng)
 
    let screen_side = 100 * square_count; // 500 (pixel)

    let myCanvas = document.getElementById("game_screen"); // tham chiếu đến canvas trên màn hình
    
    myCanvas.width = screen_side; // 500
    myCanvas.height = screen_side; // 500

    let context = myCanvas.getContext("2d");
    context.fillStyle = "green"; // màu nền

    // Rectangle
    // Vẽ giữa màn hình game
    // Chiều ngang màn hình / 2 - chiều ngang / 2
    xPosition = myCanvas.width / 2 - 25

    context.fillRect(xPosition, 225, 50, 50);
    
}


function moveRect() {
    let myCanvas = document.getElementById("game_screen"); // tham chiếu đến canvas trên màn hình
    let context = myCanvas.getContext("2d");
    context.fillStyle = "green"; // màu nền


    // Công thức đảo hướng di chuyển
    // dx = -dx;

    // Khi nào thì đảo hướng

    if (xPosition >= 500 - 50 || xPosition <= 0) {
        dx = -dx;
    }

    xPosition += dx;

    context.clearRect(0, 0, 500, 500); // xóa toàn bộ màn hình game
    context.fillRect(xPosition, 225, 50, 50);
}

setInterval(moveRect, 20 ); // ms

function controlDirection(event) {

    let KEY_UP = 38;
    let KEY_DOWN = 40;
    let KEY_RIGHT = 39;
    let KEY_LEFT = 37;

    switch (event.keyCode) {
        case KEY_RIGHT:
            dx = 5;
            break;
        case KEY_LEFT:
            dx = -5;
            break;
    }
}

window.addEventListener("keydown", controlDirection);