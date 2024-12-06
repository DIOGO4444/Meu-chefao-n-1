let experiencia = 15000
let nomeHeroi = "FELIPAO"

if (experiencia < 1000){

    console.log (" O HÉROI " + nomeHeroi + " ESTÁ NO NÍVEL FERRO ")

}else if (experiencia >= 1000 && experiencia < 2001 ){

    console.log(" O HEROI " + nomeHeroi + " ESTÁ NO NÍVEL BRONZE")

}else if (experiencia > 2000 && experiencia <= 5000){

    console.log (" O HEROI " + nomeHeroi + " ESTÁ NO NIVEL PRATA ")

}else if (experiencia >5000 && experiencia < 7001){

    console.log (" O HEROI " + nomeHeroi + " ESTÁ NIVEL OURO ")

}else if (experiencia >7000 && experiencia <=8000){

    console.log (" O HEROI " + nomeHeroi + " ESTÁ NO NIVEL PLATINA ")

}else if (experiencia >8000 && experiencia <=9000){

    console.log (" O HEROI " + nomeHeroi + " ESTÁ NO NIVEL ASCENDENTE ")

}else if (experiencia >9000 && experiencia <=10000){

    console.log (" O HEROI " + nomeHeroi + " ESTÁ NO NIVEL IMORTAL ")

}else {experiencia >10000

    console.log ( "O HEROI " + nomeHeroi + " ESTÁ NO NIVEL RADIANTE")
}
