/**
 * O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). 
 * Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
 * calcular e escrever o custo final ao consumidor. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
const pDistribuidor = 28;
const impostos = 45;
let custoFabrica = document.getElementById('custoFabrica');
let resposta = document.getElementsByTagName('span');
 
function start() {
    custoFabrica.value = 1;
}

function actionEx1() {
    resposta[0].innerHTML = Number(custoFabrica.value) + Number(custoFabrica.value * pDistribuidor/100) + Number(custoFabrica.value * impostos/100);
}