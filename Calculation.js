var a = document.getElementById('input1');
var b = document.getElementById('input2');
var x;

function add(){
    x = +a.value + +b.value;
    document.getElementById('result').innerHTML = x;
}

function sub(){
    x = a.value - b.value;
    document.getElementById('result').innerHTML = x;
}

function mul(){
    x = a.value * b.value;
    document.getElementById('result').innerHTML = x;
}

function div(){
    x = a.value / b.value;
    document.getElementById('result').innerHTML = x.toFixed(3);
}

function mod(){
    x = a.value % b.value;
    document.getElementById('result').innerHTML = x;
}

function clean(){
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('result').innerHTML = '';
}