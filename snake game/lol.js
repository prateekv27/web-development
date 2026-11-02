let board = document.querySelector(".board")
let x;
let y;
let velx = 0;
let vely = 0;
let foodrow;
let foodcol;
let food;

function random() {
    x = Math.floor(Math.random() * 20) + 1
    y = Math.floor(Math.random() * 20) + 1
    return [x, y];
}
function eat() {
    let pos;
    do{
        pos = random();
        foodrow = pos[0];
        foodcol = pos[1];
    }while(body.some(k=>{
        return k[0] === foodrow && k[1] === foodcol;
    }))
    food = document.createElement("div")
    food.classList.add("food");
    food.style.gridArea = `${foodrow}/${foodcol}`
    food.textContent = "🍎";
    board.appendChild(food);

}
let head;
// function snake(){
//     head = document.createElement("div");
//     head.classList.add("head")
//     head.style.gridArea = "1/1";
//     board.appendChild(head);
// }
function move(m) {
    if (m.key === "ArrowUp") {
        velx = 0;
        vely = -1;
    }
    if (m.key === "ArrowDown") {
        velx = 0;
        vely = 1;
    }
    if (m.key === "ArrowLeft") {
        velx = -1;
        vely = 0;
    }
    if (m.key === "ArrowRight") {
        velx = 1;
        vely = 0;
    }
}
let row;
let col;
let body = [
    [1, 1]
]

function update() {
    row = body[0][0] + vely
    col = body[0][1] + velx
    // head.style.gridArea = `${row}/${col}`
    if (row < 1 || row > 20 || col < 1 || col > 20) {
        clearInterval(game)
        alert("HAHAHA NOOB GAME OVER 😂!!!!!!!!")
        return;
    }
    body.unshift([row, col]);
    if (row === foodrow && col === foodcol) {
        food.remove();
        eat();
    } else {
        body.pop();
    }
    let self = body.slice(1).some(k => {
        return k[0]=== row && k[1]===col;
    });
    if(self===true){
        clearInterval(game)
        alert("HAHAHA YOU ATE YOURSELF 😂")
        return;
    }
    drawsnake();
}
function eaten() {
    if (row === foodrow && col === foodcol) {
        food.remove();
        eat();
    }
}
function drawsnake() {
    let elements = board.querySelectorAll(".head, .bodie");

    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
    for(let i = 0;i<body.length;i++){
        let p = document.createElement("div")
        if(i===0){
            p.classList.add("head")
        }
        else{
            p.classList.add("bodie")
        }
        p.style.gridArea = `${body[i][0]}/${body[i][1]}`
        board.appendChild(p);

    }
}

eat();
drawsnake();
document.addEventListener("keydown", move)
let game = setInterval(update, 200)