/**
 * Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10! 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
const valorB = 10;
let valorA = document.getElementById('valorA');
let resposta = document.getElementsByTagName('span');

function start() {
    valorA.value = 1;
}

function actionEx1() {

    if( valorA.value <= valorB )
        resposta[0].innerHTML = "NÃO";
    else
        resposta[0].innerHTML = "";
}