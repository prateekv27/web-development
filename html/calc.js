function calculate(operation){
    let a = parseInt(document.querySelector('#box-1').value);
    let b = parseInt(document.querySelector('#box-2').value);
    let result;
    if(operation == "add"){
        result = a+b;
        
    }
    else if(operation == "sub"){
        result = a-b;
    }
    else if(operation == "div"){
        result = a/b;
    }
    else{
        result = a*b;
    }
    document.querySelector('#result').innerText = result;
}
document.querySelector("#add").addEventListener("click", () => {
    calculate("add");
});

document.querySelector("#sub").addEventListener("click", () => {
    calculate("sub");
});

document.querySelector("#div").addEventListener("click", () => {
    calculate("div");
});

document.querySelector("#mul").addEventListener("click", () => {
    calculate("mul");
});