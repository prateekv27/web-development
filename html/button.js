window.addEventListener("load", () => {
    document.querySelector("#submit").addEventListener("click", age);
});

function age() {

    let b1 = document.querySelector("#age");
    let userage = b1.value;

    if (userage < 18) {
        alert("Invalid age");
    }
    else {
        console.log(`${userage} is valid for driving license`);

        document.querySelector("#output").innerText = `${userage} is valid for driving license` ;

        b1.value = "";
    }
}