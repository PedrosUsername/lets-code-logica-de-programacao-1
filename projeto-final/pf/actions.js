let b0 = document.getElementById('b0');
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');
let bpi = document.getElementById('bpi');

let bsen = document.getElementById('bsen');
let bcon = document.getElementById('bcos');
let bsqrt = document.getElementById('bsqrt');
let bplu = document.getElementById('bplu');
let bdiv = document.getElementById('bdiv');
let bmul = document.getElementById('bmul');
let bles = document.getElementById('bles');
let bpow = document.getElementById('bpow');

let valorA;
let operador;
let valorB;

let visor = document.getElementsByTagName('span');

function startAction() {
    valorA = null;
    operador = null;
    valorB = null;

    visor[0].innerHTML = " # ";
    visor[1].innerHTML = " # ";
    visor[2].innerHTML = " # ";
    visor[4].innerHTML = " # "
}

function setValue(value) {
    if(typeof value === "string")
        value = Math.PI;

    if (valorA === null){
        valorA = Number(value);
        visor[0].innerHTML = value;
    }
    else {
        valorB = Number(value);
        visor[2].innerHTML = value;        
    }
}
function setOperator(operator) {
    operador = operator;
    visor[1].innerHTML = operator;
}

function endAction() {
    switch(operador) {
        case '+':
            visor[4].innerHTML = Number(valorA) + Number(valorB);
            break;
        case '-':
            visor[4].innerHTML = Number(valorA) - Number(valorB);
            break;
        case '/':
            visor[4].innerHTML = Number(valorA) / Number(valorB);
            break;            
        case '*':
            visor[4].innerHTML = Number(valorA) * Number(valorB);
            break;            
        case '^':
            visor[4].innerHTML = Number(valorA) ** Number(valorB);
            break;            
        case 'Sqrt()':
            visor[4].innerHTML = Number(valorA) * Math.sqrt( Number(valorB) );
            break;            
        case 'Sen()':
            visor[4].innerHTML = Number(valorA) * Math.sin(Number(valorB));
            break;
        case 'Cos()':
            visor[4].innerHTML = Number(valorA) * Math.cos(Number(valorB));
            break;
        default:
            alert('error');
    } 
}
