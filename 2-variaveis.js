console.log("Atribuicao de Variaveis");

const idade = 30;
let nome = "Matheus";
const sobrenome = "Correa";

console.log(nome,sobrenome) // com virgula da espaço automaticamente

console.log(`meu nome é ${nome} ${sobrenome}`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


listaDeDestinos.push(`mamadeira`)
console.log(listaDeDestinos)

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos)

console.log(listaDeDestinos[1]);
console.log(listaDeDestinos[1], listaDeDestinos[0]);

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); 
console.log(fruits); 
console.log(fruits[1]);
