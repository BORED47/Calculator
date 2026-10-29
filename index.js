function solve() {
    const input = document.getElementById("input");
    let output = document.getElementById("output");
    let ans = eval(input.value);
    output.innerText = ans;

    sessionStorage.setItem("input", JSON.stringify(output));
    equations.push(input.value);
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
    sessionStorage.clear();
}

function checking_StorageUp(){
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    input.value = JSON.parse(sessionStorage.getItem(""));
    output.innerText = JSON.parse(sessionStorage.getItem(""));
}
function checking_StorageDown(){
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    input.value = JSON.parse(sessionStorage.getItem(""));
    output.innerText = JSON.parse(sessionStorage.getItem(""));

}


let equations = [CSSMathMax];

function equStorage(){
    const stored = sessionStorage.getItem("equations");
    if(stored){
       equations = JSON.parse(stored);
    }
    else{
        let equations = [];
        sessionStorage.setItem("", equations);
    }
}