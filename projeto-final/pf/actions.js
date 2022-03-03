let valorA;
let operador;
let valorB;

let visor = document.getElementsByTagName('span');
let historico = document.getElementById('hist');

const vetor = []

function startAction() {
    valorA = null;
    operador = '#';
    valorB = null;

    visor[0].innerHTML = " 0 ";
    visor[1].innerHTML = " # ";
    visor[2].innerHTML = " 0 ";
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

    const operacao = {
        a: Number(valorA),
        b: Number(valorB),
        operador: operador,
        resp: 0,
    }
    const a = operacao.a;
    const b = operacao.b;
    let resp;

    switch(operacao.operador) {
        case '+':
            resp = a + b;
            break;
        case '-':
            resp = a - b;
            break;
        case '/':
            resp = a / b;
            break;            
        case '*':
            resp = a * b;
            break;            
        case '^':
            resp = a ** b;
            break;            
        case 'Sqrt()':
            resp = a * Math.sqrt(b);
            break;            
        case 'Sen()':
            resp = a * Math.sin(b);
            break;
        case 'Cos()':
            resp = a * Math.cos(b);
            break;
        default:
            resp = '#';
            alert('Por favor especifique um operador');
    }
    
    visor[4].innerHTML = resp;
    operacao.resp = resp;

    const paragraph = document.createElement("p");
    const text = document.createTextNode(`${operacao.a} ${operacao.operador ?? '#'} ${operacao.b} = ${operacao.resp} <`);
    paragraph.appendChild(text);
    historico.appendChild(paragraph);

    vetor.push(operacao);
    console.clear();
    console.log(vetor)
}
