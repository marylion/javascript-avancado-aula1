const nomes = ['Biatriz', 'Maria', 'Iraneide', 'Irani', 'Ivanilde', 'Irene'];
console.log(nomes);

//Podemos escrever os conjuntos de dados um embaixo do ondurationchange, com a quebra de linha.
//const nomes = [
//     'Maria', 
//     'Iraneide', 
//     'Irani', 
//     'Ivanilde', 
//     'Irene'
// ];

//------Manipulando a Array com o método Join(), que é usada para junção de elementos de uma dado array em uma string, retornando esta mesma string, a partir do uso de um separador que pode ser espaço(' '), vírgula (',') que é o padrão, um asterístico ('*'), ou outro separador especificado.

// Método .join()
// console.log(nomes.join('*'));
// console.log(nomes.join('--X--'));
// console.log(nomes.join(' '));
// console.log(nomes.join(' & '));


// Método .push()    >>>adiciona elemento no  final (último) de um array

console.log(nomes.push('Elizângela', 'Andrezza', 'Fernanda', 'Silva'));

// const nomesAdicionados = nomes.push('Elizângela', 'Andrezza', 'Fernanda', 'Silva');
// console.log(nomesAdicionados);

// Método .pop()    >>>remove elemento no  final (último) de um array

console.log(nomes.pop());

// Método .shift()    >>>remove elemento no inicio (primeiro) de um array

console.log(nomes.shift());

//Removendo sucessivamente os elementos de uma array até que este esteja vazio, com a estrutura laço de repetição.
console.log(nomes);

while ((i = nomes.shift()) !== undefined) {
    console.log(i); 
}