function display(val){
    document.getElementById('result').value += val
    return val;
}

function solve(){
    let value = document.getElementById('result').value
    let eval1 = eval(value);
    document.getElementById('result').value = eval1
    return eval1
}

function clearScreen(){
    document.getElementById("result").value = " ";
}