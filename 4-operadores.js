
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

let pontuacaoComprador = 4

const estaAcompanhada = true;
console.log("Embarque: \n\n")
if (pontuacaoComprador >= 5 || estaAcompanhada == true) {
    console.log("Comprador maior de idadade");
    listaDeDestinos.splice(1, 1); // removendo item
    console.log(`Então o comprador pode comprar nos estados ${listaDeDestinos}`);
} else {
    console.log("Não é maior de idade e não posso vender");
}