const p = document.querySelector("#gen");
const q = document.querySelector("#password");
p.addEventListener("click" , ()=>{generatepass()});

function generatepass(){
    let a = "abcdefghijklmneopqrstuvwxyz"
    let b = "1234567890"
    let c = "!@#$%^&*()"
    let d = "";
    let e = a+b+c
    for(let i =0; i <10;i++){
        d+=e[Math.floor(Math.random()*e.length)];

    }
    q.value = d;


}