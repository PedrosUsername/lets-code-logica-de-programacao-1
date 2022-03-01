/**
 * Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). 
 *  
 * Obs: Utilize a interface html para receber os dados do usuário
 */
const valorB = 0;
let valorA = document.getElementById('valorA');
let resposta = document.getElementsByTagName('span');

function start() {
    valorA.value = 1;
}

function actionEx1() {

    if( valorA.value < valorB )
        resposta[0].innerHTML = "NEGATIVO";
    else
        resposta[0].innerHTML = "POSITIVO (ou zero)";
}