let board = document.querySelector(".board")
let x;
let y;
let velx=0;
let vely= 0;

function random(){
    x = Math.floor(Math.random()*20)+1
    y = Math.floor(Math.random()*20)+1
    return [x,y];
}
function eat(){
    let pos = random();
    let food = document.createElement("div")
    food.classList.add("food");
    food.style.gridArea = `${pos[0]}/${pos[1]}`
    food.textContent = "🍎";
    board.appendChild(food);

}

function snake(){
    let head = document.createElement("div");
    head.classList.add("head")
    head.style.gridArea = "1/1";
    board.appendChild(head);
}
function move(m){
    if(m.key === "ArrowUp"){
        velx = 0;
        vely = 1;
    }
    if(m.key === "ArrowDown"){
        velx=0;
        vely = -1;
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

eat();
snake();
document.addEventListener("keydown" , move)