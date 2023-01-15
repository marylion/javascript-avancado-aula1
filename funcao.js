// >>>Uma função é entendida como um subconjunto de linhas de códigos, como se fosse um subprograma, que pode ser chamado por outro

// >>>Para criar uma função precisamos utilizar primeiramente “function”, em seguida o nome da função, e entre parênteses os argumentos dessa função

// >>>As funções podem receber argumentos, ou seja, receber dados para usar dentro dos blocos de código

// >>>Uma função pode ter várias linhas e não necessariamente precisa retornar algo ou receber algum argumento.

// function square(numero) {
//     return numero * numero;
// }

let num1 = 10,
    num2 = 3,
    nome = 'Rafael';

//Essa função é definida no escopo global

function multiplica() {
    return num1 * num2;
}

console.log('O resultado da multiplicação é: ' + multiplica());

//Função aninhada
function getScore () {
    let num1 = 1,
        num2 = 3;
    function add() {
        return nome + ' fez ' + (num1 + num2) + ' pontos';
    }
    return add();
}

console.log(getScore());


// A função abaixo é uma função Recursiva, ou seja, chama a si mesma.
// function loop (x) {
//     if (x >= 5) // "x >= 5" a condição de parada (equivalente a "!(x < 5"))//
//         return;
//     //faça isso
//     loop(x + 1); // chamada recursiva
// }

// loop(0);

