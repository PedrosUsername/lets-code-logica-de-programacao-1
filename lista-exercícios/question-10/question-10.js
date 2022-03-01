/**
 * Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
let num = document.getElementById('num');
let resposta = document.getElementById('resposta');

function start() {
    num.value = 1;
    actionEx10();
}

function actionEx10() {
    let aux = 1;

    const newDiv = document.createElement("div");
    while(aux <= num.value){
        let p = document.createElement("p");
        p.innerText = aux;
        newDiv.appendChild(p);

        aux+= 1;
    }
    resposta.children[1].replaceWith(newDiv);
}