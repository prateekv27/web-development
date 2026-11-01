let board = document.querySelector(".board")
let x;
let y;
let velx=0;
let vely= 0;
let foodrow;
let foodcol;
let food;

function random(){
    x = Math.floor(Math.random()*20)+1
    y = Math.floor(Math.random()*20)+1
    return [x,y];
}
function eat(){
    let pos = random();
    foodrow = pos[0];
    foodcol = pos[1];
    food = document.createElement("div")
    food.classList.add("food");
    food.style.gridArea = `${foodrow}/${foodcol}`
    food.textContent = "🍎";
    board.appendChild(food);

}
let head;
function snake(){
    head = document.createElement("div");
    head.classList.add("head")
    head.style.gridArea = "1/1";
    board.appendChild(head);
}
function move(m){
    if(m.key === "ArrowUp"){
        velx = 0;
        vely = -1;
    }
    if(m.key === "ArrowDown"){
        velx=0;
        vely = 1;
    }
    if(m.key === "ArrowLeft"){
        velx = -1;
        vely = 0;
    }
    if(m.key === "ArrowRight"){
        velx= 1;
        vely =0;
    }
}
let row = 1;
let col = 1;
function update(){
    row+=vely
    col+=velx
    head.style.gridArea = `${row}/${col}`
    if(row<1||row>20||col<1||col>20){
        clearInterval(game)
        alert("HAHAHA NOOB GAME OVER 😂!!!!!!!!")
        return;
    }
    eaten();
}
function eaten(){
    if(row===foodrow && col===foodcol){
        food.remove();
        eat();
    }
}

eat();
snake();
document.addEventListener("keydown" , move)
let game = setInterval(update,150)