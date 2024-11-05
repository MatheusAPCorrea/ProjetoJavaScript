
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

let pontuacaoComprador = 4
let destino = 'São Paaulo'
let contador = 0;
let destinoExiste = false
let destinoEncontrado
while(contador<3){

    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        destinoEncontrado = destino;
        break;
    }
    contador += 1;
}        


if (destinoExiste == false) {
    console.log("Destino não existe: ", destinoExiste);  
}
else {
    console.log("Destino existe: ", destinoExiste, destinoEncontrado);
}