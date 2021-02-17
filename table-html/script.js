
/*

Danh sách các vị trí của rắn (update_snake_to_game())

+

Vị trí các con chuột (update_mouses_to_game())

====> [Game]  === render_table() ==> Chuyển thành table (Giao diện)

*/

// mảng ở trong mảng
let game = [
    [ 0, 0, 0, 0, 0 ], // row = 0
    [ 0, 0, 0, 0, 0 ], // row = 1
    [ 0, 0, 0, 0, 0 ], // row = 2
    [ 0, 0, 0, 0, 0 ], // row = 3
    [ 0, 0, 0, 0, 0 ], // row = 4
];


// Lưu vị trí của rắn
let snake_position = [
    [1,1], // node 1
    [1,2], // node 2
    [1,3],  // node 3
];


// Lưu vị trí của các con chuột
let mouses_position = [
    [3, 3], // con chuột 1
    [0, 4]  // con chuột 2
];

// Biến lưu vị trí đầu rắn hiện tại
let snake_head_position = [1,3];

// Hàm kiểm tra vị trí các con chuột và đầu rắn
function check_collision() {
    for (let i = 0 ; i < mouses_position.length; i++) {
        if (snake_head_position[0] === mouses_position[i][0]
            && snake_head_position[1] === mouses_position[i][1]) {
                return true; // dừng hàm và trả về
        }
    }
    return false;
}

// 1. Viết hàm cập nhật các phần tử của mảng game tương ứng với mảng snake
// Vòng lặp, duyệt qua mảng snake và gán lại 

function update_snake_to_game() {
    for (let i = 0; i < snake_position.length; i++) {
        let x = snake_position[i][0];
        let y = snake_position[i][1];
        game[x][y] = 1;
    }

    // Cập nhật màu cho phần đầu của rắn
    let last_x = snake_position[snake_position.length-1][0];
    let last_y = snake_position[snake_position.length-1][1];
    game[last_x][last_y] = 2;
    snake_head_position = [last_x, last_y];
}

function update_mouses_to_game() {
    for (let i = 0; i < mouses_position.length; i++) {
        let x = mouses_position[i][0];
        let y = mouses_position[i][1];

        game[x][y] = 3;
    }
}


// Chuyển từ mảng 2 chiều "game" thành table
function render_table() {

    let table_content = "";

    // Sử dụng vòng lặp 1 để duyệt hàng (row) của mảng 2 chiều.
    for (let row = 0; row < game.length; row++ ) {

        table_content += '<tr>';

        // Sử dụng vòng lặp 2 để duyệt từng phần tử (element) của hàng (row).
        for (let col = 0; col < game[row].length; col++ ) {

            let element = game[row][col]; // từng phần tử

            let color = "";

            switch (element) {
                case 0:
                    color = "white";
                    break;
                case 1:
                    color = "green";
                    break;
                case 2:
                    color = "blue";
                    break;
                case 3:
                    color = "gray";
                    break;
                default:
                    color = "white";
            }

            table_content += '<td width="20" height="20" style="background-color: ' + color + ';">';
            // table_content += element; // 0 hoặc 1, hoặc 2 (Debug)
            table_content += '</td>';

        }

        table_content += '</tr>';
    }

    document.getElementById("game_screen").innerHTML = table_content;
}


// Di chuyển các phần tử theo logic của game
// function move_snake() {
//     // hướng ? (direction = left, right, up, down)
//     // thay đổi giá trị của các phần tử trong mảng
    
//     game[x][y] = 0;
//     y++;

//     if (y < game[x].length) {
//         // game chỉ có 5 cột
//         game[x][y] = 1; // y vượt quá 4 ==> thêm phần tử (JavaScript)
//     }
    
//     // Xây dựng lại màn hình game
//     render_table();
// }

function move_snake_to_right() {
    snake_position.shift(); // xóa phần tử đầu tiên

    // tìm vị trí bên phải của đầu rắn
    snake_head_position = [snake_head_position[0], ++snake_head_position[1]];
    snake_position.push(snake_head_position); // thêm vào cuối mảng

    if (check_collision()) {
        alert("Đã ăn chuột");
    }
}

function move_snake_to_down() {
    snake_position.shift(); // xóa phần tử đầu tiên

    // tìm vị trí bên dưới của đầu rắn
    snake_head_position = [ ++snake_head_position[0], snake_head_position[1]];

    // thêm vào cuối mảng
    snake_position.push(snake_head_position);

    if (check_collision()) {
        alert("Đã ăn chuột");
    }
}


function move_snake_to_left() {
    snake_position.shift(); // xóa phần tử đầu tiên

    // tìm vị trí bên trái của đầu rắn
    snake_head_position = [ snake_head_position[0], --snake_head_position[1]];

    // thêm vào cuối mảng
    snake_position.push(snake_head_position);

    if (check_collision()) {
        alert("Đã ăn chuột");
    }
}

function move_snake_to_up() {
    snake_position.shift(); // xóa phần tử đầu tiên

    // tìm vị trí bên trên của đầu rắn
    snake_head_position = [ --snake_head_position[0], snake_head_position[1]];

    // thêm vào cuối mảng
    snake_position.push(snake_head_position);

    if (check_collision()) {
        alert("Đã ăn chuột");
    }


}

function reset_game() {
    game = [
        [ 0, 0, 0, 0, 0 ], // row = 0
        [ 0, 0, 0, 0, 0 ], // row = 1
        [ 0, 0, 0, 0, 0 ], // row = 2
        [ 0, 0, 0, 0, 0 ], // row = 3
        [ 0, 0, 0, 0, 0 ], // row = 4
    ];
}

function run_game() {

    // Reset lại màn hình game
    reset_game();

    // Cập nhật lại giá trị mới của các đối tượng trong game
    update_snake_to_game();
    update_mouses_to_game();

    // Vẽ lại giao diện
    render_table();
}

setInterval(run_game, 1000 ); // 1 giây

// Hàm
// Kiểm tra xem đầu rắn có
// đang trùng với vị trí chuột.


// Ăn chuột
// Hàm 
// - Xóa chuột khỏi danh sách mouse

// Hàm
// - Tăng node cho rắn:
// Lấy vị trí hiện tại của chuột
// Thêm vào cuối mảng

// Hàm kiểm tra các điều kiện dừng game