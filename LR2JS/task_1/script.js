let inputName = document.getElementById("inputName");

function show() {
    console.clear()
    inputName.style.display = "block"
}

let YouUser = document.getElementById("YouUser");
let ice = document.getElementById("ice");
let chocolate = document.getElementById("chocolate");
let iceLable = document.getElementById("iceLable");
let chocolateLable = document.getElementById("chocolateLable");

function Change() {
    console.clear()
    YouUser.innerHTML = "Ви обрали: " + ((ice.checked) ? iceLable.textContent : chocolateLable.textContent);
}

