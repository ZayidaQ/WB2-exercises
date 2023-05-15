//Author: Zhayida Haishan

"use sprict";

window.onload = init;

function init(){
    const greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked(){
    const userName = document.getElementById("nameField").value;
    const message = `Hey there ${userName}`;
    alert(message)
}