function solve() {
    const input = document.getElementById("input");
    let output = document.getElementById("output");
    output.innerText = eval(input.value);

    equations.push(input.value);
    sessionStorage.setItem("C", JSON.stringify(equations));
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

let p = 0;
function checking_StorageUp(){
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    output.innerText = "";
    if(input.value === equations[p]){
        p--;
        if(p < 0){
            p = 0;
        }
    }else {
        p = equations.length - 1;
    }
    input.value = equations[p];

}
function checking_StorageDown(){
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    output.innerText = "";
    if(input.value === equations[p]){
        p++;
        if(p > equations.length - 1){
            p = equations.length - 1;
        }
    }else {
        p = equations.length - 1;
    }
    input.value = equations[p];
}


let equations = [];

function equStorage(){
    const stored = sessionStorage.getItem("C");
    if(stored){
       equations = JSON.parse(stored);
    }
    else{
        let equations = [];
        sessionStorage.setItem("C", JSON.stringify(equations));
    }
}