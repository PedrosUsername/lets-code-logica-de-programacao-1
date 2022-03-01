let ladoA = document.getElementById('ladoA');
let ladoB = document.getElementById('ladoB');
let resposta = document.getElementsByTagName('span');

function start() {
    ladoA.value = 1;
    ladoB.value = 1;
}

function actionEx1() {
    resposta[0].innerHTML = ladoA.value * ladoB.value;
}