/**
 * Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
let valorA = document.getElementById('valorA');
let valorB = document.getElementById('valorB');
let resposta = document.getElementsByTagName('span');

function start() {
    valorA.value = 1;
    valorB.value = 1;
}

function actionEx8() {

    if( Number(valorA.value) >= Number(valorB.value) ){
        resposta[0].innerHTML = valorA.value;
    }
    else
    if( Number(valorA.value) <= Number(valorB.value) ){
        resposta[0].innerHTML = valorB.value;
    }
}