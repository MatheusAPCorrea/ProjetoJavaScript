
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

let pontuacaoComprador = 4
let destino = 'São Paulo'
let destinoExiste = false
let destinoEncontrado

for(let i = 0 ; i <3 ; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        }
}

if (destinoExiste == false) {
    console.log("Destino não existe: ", destinoExiste);  
}
else {
    console.log("Destino existe: ", destinoExiste, destinoEncontrado);
}
