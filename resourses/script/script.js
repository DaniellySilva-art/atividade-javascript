// Variáveis
// Tipos de variáveis
// Comando de saída de dados
// typeof() : função para saber o tipo de dado.
// Aritmética: soma, divisão, subtração, multiplicação.

// Comando de entrada de dados



let num1 = Number(prompt("Digite a primeira nota: "));
let num2 = Number(prompt("Digite a segunda nota: "));
let num3 = Number(prompt("Digite a terceira nota: "));
let num4 = Number(prompt("Digite a quarta nota: "));
let resultado = (num1+num2+num3+num4)/4
alert( "Sua média é " + resultado);

if(resultado >= 7){
alert(" Você foi aprovado")
}
else{
alert("Você foi reprovado")
}