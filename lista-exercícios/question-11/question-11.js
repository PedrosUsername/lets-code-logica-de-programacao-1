/**
 *  Escreva um algoritmo que imprima a tabuada (de 1 a 10) para os números de 1 a 10. 
 */

 console.clear();

 for(let j = 1; j < 11; j++){
     console.log(`Tabuada do ${j}`);
     for(let i = 1; i < 11; i++)
         console.log(`${j} x ${i} = ` + j * i);
 }