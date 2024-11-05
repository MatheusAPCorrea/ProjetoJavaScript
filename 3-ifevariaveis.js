const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 15;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

const estaAcompanhada = false;

if (idadeComprador >= 18) {
    console.log("Comprador maior de idadade");
    listaDeDestinos.splice(1, 1); // removendo item
} else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1); //removedo item
} else {
    console.log("Não é maior de idade e não posso vender");
}
