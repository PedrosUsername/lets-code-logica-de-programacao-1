/**
 * Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

 let salario = document.getElementById('salario');
 let reajuste = document.getElementById('reajuste');
 let resposta = document.getElementsByTagName('span');
 
 function start() {
    salario.value = 1;
    reajuste.value = 1;
 }
 
 function actionEx1() {
    resposta[0].innerHTML = Number(salario.value) + Number(salario.value) * (Number(reajuste.value/100));
 }