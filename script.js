//SEMANA 1

const chrono = {
    serie: "Chrono",
    titulos: 3,
    serieJaponesa: true,
    jogosdaSerie: ["Chrono Trigger", "Radical Dreamers", "Chrono Cross"],
    imagem: "./img/chronotrigger.jpg"
};

const dragonQuest = {
    serie: "Dragon Quest",
    titulos: 11,
    serieJaponesa: true,
    jogosdaSerie: ["Dragon Quest", "Dragon Quest II", "Dragon Quest III", "Dragon Quest IV", "Dragon Quest V", "Dragon Quest VI", "Dragon Quest VII", "Dragon Quest VIII", "Dragon Quest IX", "Dragon Quest X", "Dragon Quest XI"],
    imagem: "./img/dqxi.jpg"
};

const wildArms = {
    serie: "Wild Arms",
    titulos: 7,
    serieJaponesa: true,
    jogosdaSerie: ["Wild Arms", "Wild Arms 2", "Wild Arms 3", "Wild Arms 4", "Wild Arms 5", "Wild Arms Alter Code: F", "Wild Arms XF"],
    imagem: "./img/wildarms.png"
}

const media = (chrono.titulos + dragonQuest.titulos + wildArms.titulos) / 3;
console.log(media);

if (chrono.serieJaponesa && dragonQuest.serieJaponesa && wildArms.serieJaponesa === true) {
    console.log("Todos os jogos são séries japonesas") 
} else {
    console.log("Nem todos os jogos são séries japonesas")
};

//SEMANA 2
console.log(chrono.serie.toUpperCase(), chrono);
console.log(dragonQuest.serie.toUpperCase(), dragonQuest);
console.log(wildArms.serie.toUpperCase(), wildArms);


//SEMANA 3 & SEMANA 4
const jogos = [];

if (chrono.serieJaponesa === true) {
    (jogos.push(chrono))
} else {
    alert("Item não adicionado")
};

if (dragonQuest.serieJaponesa === true) {
    (jogos.push(dragonQuest))
} else {
    alert("Item não adicionado")
};

if (wildArms.serieJaponesa === true) {
    (jogos.push(wildArms))
} else {
    alert("Item não adicionado")
};

console.log(jogos);

// const jogos = [
//     {
//         serie: "Chrono",
//         titulos: 3,
//         serieJaponesa: true,
//         jogosdaSerie: ["Chrono Trigger", "Radical Dreamers", "Chrono Cross"],
//         imagem: "./img/chronotrigger.jpg"
//     },

//     {
//         serie: "Dragon Quest",
//         titulos: 11,
//         serieJaponesa: true,
//         jogosdaSerie: ["Dragon Quest, Dragon Quest II, Dragon Quest III, Dragon Quest IV, Dragon Quest V, Dragon Quest VI, Dragon Quest VII, Dragon Quest VIII, Dragon Quest IX, Dragon Quest X, Dragon Quest XI"],
//         imagem: "./img/dqxi.jpg"
//     },
//     {
//         serie: "Wild Arms",
//         titulos: 7,
//         serieJaponesa: true,
//         jogosdaSerie: ["Wild Arms", "Wild Arms 2", "Wild Arms 3", "Wild Arms 4", "Wild Arms 5", "Wild Arms Alter Code: F", "Wild Arms XF"],
//         imagem: "./img/wildarms.png"
//     }

// ]

//SEMANA 5

for (let i = 0; i < jogos.length; i++) {
    const seriesJogos = jogos[i].serie.toString();
    console.log(`erie: ${seriesJogos}`);
    const titulosJogos = jogos[i].titulos.toString();
    console.log(`titulos: ${titulosJogos}`);
    const serieJaponesaJogos = jogos[i].serieJaponesa;
    console.log(`Série Japonesa: ${serieJaponesaJogos}`);
    const jogosdaSerieJogos = jogos[i].jogosdaSerie;
    console.log(`Jogos da Série: ${jogosdaSerieJogos}`);
}

function gerarString(jogo) {
    let printString = `
    serie: ${jogo.serie}
    titulos: ${jogo.titulos}
    serieJaponesa: ${jogo.serieJaponesa ? "Sim" : "Não"}
    jogosdaSerie: ${jogo.jogosdaSerie.join(", ")}`
    console.log(printString);
}

for (let jogo of jogos){
    console.log(jogo);
    }


//     console.log("-----------------------ITEM 6-----------------------")
// //Semana 6.1. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
// function cachorroFuncao(objeto) {
//     console.log(`Nome: ${objeto.nome.toUpperCase()}\n Sexo: ${objeto.sexo}\n Idade: ${objeto.idade}\n Está castrado(a)? ${objeto.estaCastrado}\n Anos na ONG: ${objeto.anosNaOng}\n Características: ${objeto.caracteristicas}\n`);
// }

// for (let i=0; i<cachorros.length; i++){
// cachorroFuncao(cachorros[i]);
// }

// funcaoGeraStringjogo(jogos[0])

//SEMANA 6

function stringJogos(objeto) {

    console.log(`Nome: ${objeto.serie.toUpperCase()}\n titulos: ${objeto.titulos}\n Série Japonesa: ${objeto.serieJaponesa}\n Jogos da Série: ${objeto.jogosdaSerie}\n`);

};


function pesquisarJogo() {
    let serie = document.getElementById("pesquisar-jogo").value
    console.log(serie);
    let jogosFiltrados = jogos.filter(
        jogo => {
            return jogo.serie.toLowerCase().includes(serie.toLowerCase())
        }
    )
    if (jogosFiltrados.length) {
        geraCards(jogosFiltrados)

    } else {
        /* alert("jogo não encontrado!") */localStorage
        principal.innerHTML = ""
        principal.innerHTML = "<h1 style='color: white;' >jogo não encontrado!!!</h1>"
    }
}


// let busca = prompt("Digite o serie do jogo")

// buscarjogos(jogos, busca)

let principal = document.getElementById("principal")

function geraCards(jogos) {
    principal.innerHTML = ""
    for (const jogo of jogos) {
        geraCard(jogo)
    }
}
function geraCard(jogo) {
    
    let jogoCard = document.createElement("article")
    jogoCard.classList.add("jogo")
    const jogoInnerHtml = `
        <figure>
            <img src=${jogo.imagem} alt="poster ${jogo.serie}">
        </figure>
        <ul>
            <li> <b>${jogo.serie}</b> </li>
            <li>Títulos: ${jogo.titulos}</li>
            <li>É uma série japonesa? ${jogo.serieJaponesa ? "Sim" : "Não"}</li>
            <li>Jogos da Série: ${jogo.jogosdaSerie.join(", ")} </li>
        </ul>   
        `
    jogoCard.innerHTML = jogoInnerHtml
    principal.appendChild(jogoCard)
}

geraCards(jogos)

const idade = jogos[0].titulos + jogos[1].titulos + jogos[2].titulos
console.log(idade);

const mediaIdade = idade / 3

console.log(mediaIdade);

console.log(`${jogos[0].serie.toLocaleUpperCase()} - ${jogos[1].serie.toLocaleUpperCase()} - ${jogos[2].serie.toUpperCase()}`);

if (jogos[0].serieJaponesa === true && jogos[1].serieJaponesa === true && jogos[2].serieJaponesa === true ) {
    console.log("Verdadeiro");
}else{
    console.log("Nem todos ganharam um serieJaponesa");
}