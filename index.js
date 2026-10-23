let input = document.getElementById("");
function solve() {
    let ans = document.getElementsByClassName("#output");
    const equation = document.getElementById("#input").toString();
    ans = eval(equation.value);
}

function textInput(){

}
function clear(){

}

function checking_Storage(){

}

function equStorage(){
    const stored = sessionStorage.getItem("#output");
    if(stored){
       let equations = JSON.parse(stored);
    }
    else{
        equations = [];
        sessionStorage.setItem("#output", equations);
    }
}