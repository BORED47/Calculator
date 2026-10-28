function solve() {
    const input = document.getElementById("input");
    let output = document.getElementById("output");
    let ans = eval(input.value);
    output.innerText = ans;
}

function textInput(text){
    let input = document.getElementById("input");
    input.value += text;
}
function clearing(){
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    input.value = "";
    output.innerText = "";
}

function checking_Storage(){

}

function equStorage(){
    const stored = sessionStorage.getItem("output");
    if(stored){
       let equations = JSON.parse(stored);
    }
    else{
        equations = [];
        sessionStorage.setItem("output", equations);
    }
}