// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;

// Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

// - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

let numberOne = Number(prompt('Digite o primeiro número:'))
let numberTwo = Number(prompt('Digite o segundo número:'))

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let multi = numberOne * numberTwo
let div = numberOne / numberTwo
let restDiv = numberOne % numberTwo

alert(`A soma dos números é: ${sum}`)
alert(`A subtração dos números é: ${sub}`)
alert(`A multiplicação dos números é: ${multi}`)
alert(`A divisão dos números é: ${div}`)
alert(`O resto da divisão dos números é: ${restDiv}`)

if((sum % 2) == 0){
  alert(`A soma dos dois números é par: ${sum}`)
}else{
  alert(`A soma dos dois números é ímpar: ${sum}`)
}

if(numberOne === numberTwo){
  alert('Os dois números são iguais')
}else{
  alert('Os dois números são diferentes')
}