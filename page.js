const devilMayCry = {
serie: "Devil May Cry",
Jogos: 5,
serieJaponesa: true,
ordemCronologica: [3, 1, 4, 2, 5]
};

const shadowHearts = {
serie: "Shadow Hearts",
Jogos: 4,
serieJaponesa: true,
ordemCronologica: [0, 1, 2, 3, 4]
};

const yakuza ={
serie: "Yakuza",
Jogos: 8,
serieJaponesa: true,
ordemCronologica: [0, 1, 2, 3, 4, 5, 6, 7, 8]
}

const jogos = [];

if (devilMayCry.serieJaponesa === true) {
    (jogos.push(devilMayCry))
} else {
    alert("Item não adicionado")
};

if (shadowHearts.serieJaponesa === true) {
    (jogos.push(shadowHearts))
} else {
    alert("Item não adicionado")
};

if (yakuza.serieJaponesa === true) {
    (jogos.push(yakuza))
} else {
    alert("Item não adicionado")
};

for(let i = 0; i <= jogos.length; i++) {
    console.log(jogos)
};

// const mediaNumeroDeJogos = (numeroDeJogos1 + numeroDeJogos2 + numeroDeJogos3) / 3;
// console.log(mediaNumeroDeJogos);

// const verificarPlataformas = multiplataforma1 && multiplataforma2 && multiplataforma3 === true
// console.log(verificarPlataformas);

// console.log(jogo1.toUpperCase());
// console.log(numeroDeJogos1);
// console.log(multiplataforma1);
// console.log(ordemCronologica1);

// console.log(jogo2.toUpperCase());
// console.log(numeroDeJogos2);
// console.log(multiplataforma2);
// console.log(ordemCronologica2);

// console.log(jogo3.toUpperCase());
// console.log(numeroDeJogos3);
// console.log(multiplataforma3);
// console.log(ordemCronologica3);