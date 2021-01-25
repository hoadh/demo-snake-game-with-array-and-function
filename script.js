
// mảng ở trong mảng
let game = [
    [ 1, 0, 0, 0, 0 ], // row = 0
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ], // row = 2
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ], // row = 4
];

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

let x = 0, y = 0;

// Di chuyển các phần tử theo logic của game
function move_snake() {
    // hướng ? (direction = left, right, up, down)
    // thay đổi giá trị của các phần tử trong mảng
    
    game[x][y] = 0;
    y++;

    if (y < game[x].length) {
        // game chỉ có 5 cột
        game[x][y] = 1; // y vượt quá 4 ==> thêm phần tử (JavaScript)
    }
    
    // Xây dựng lại màn hình game
    render_table();
}
setInterval(move_snake, 1000 ); // 1 giây
