const board = document.getElementById("board");

const pieces = {
    r: "pieces/bR.svg",
    n: "pieces/bN.svg",
    b: "pieces/bB.svg",
    q: "pieces/bQ.svg",
    k: "pieces/bK.svg",
    p: "pieces/bP.svg",

    R: "pieces/wR.svg",
    N: "pieces/wN.svg",
    B: "pieces/wB.svg",
    Q: "pieces/wQ.svg",
    K: "pieces/wK.svg",
    P: "pieces/wP.svg"
};

const position = [
    ["r","n","b","q","k","b","n","r"],
    ["p","p","p","p","p","p","p","p"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["P","P","P","P","P","P","P","P"],
    ["R","N","B","Q","K","B","N","R"]
];

function drawBoard() {

    board.innerHTML = "";

    for (let row = 0; row < 8; row++) {

        for (let col = 0; col < 8; col++) {

            const square = document.createElement("div");
            square.classList.add("square");

            if ((row + col) % 2 === 0) {
                square.classList.add("light");
            } else {
                square.classList.add("dark");
            }

            const piece = position[row][col];

            if (piece) {
                const img = document.createElement("img");
                img.src = pieces[piece];
                img.width = 72;
                img.height = 72;
                img.draggable = false;
                square.appendChild(img);
            }

            board.appendChild(square);
        }
    }
}

drawBoard();