let x = document.querySelectorAll(".but");
let y = document.querySelector("#reset-btn")
let o = true;
let gameover = false;
let msg = document.querySelector(".winner");
let newgamebtn = document.querySelector(".new-game");
let lol = document.querySelector(".after-win");
const win = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 4, 6], [3, 4, 5],
    [6, 7, 8], [2, 5, 8]
];

x.forEach((but) => {
    if (gameover === true) {
        return;
    }
    but.addEventListener("click", () => {
        console.log("but clicked");
        if (o === true) {
            but.innerText = "O"
            o = false;
        }
        else {
            but.innerText = "X"
            o = true;
        }
        but.disabled = true;
        const showwin = (w)=> {
            msg.innerText = `congrats the winner is ${w}`;
            lol.classList.remove("hide");

        }

        const chechwin = () => {
            for (let i of win) {
                let p = x[i[0]].innerText
                let q = x[i[1]].innerText
                let r = x[i[2]].innerText

                if (p !== "" && q !== "" && r !== "") {
                    if (p === q && q === r) {
                        console.log("winner", p);
                        gameover = true;
                        showwin(p);
                        x.forEach((but) => {
                            but.disabled = true;
                        });

                        return;
                        
                    }
                }
                
            }
        };
   
        chechwin();
        
        
    })
});

