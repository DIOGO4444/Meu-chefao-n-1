let nivel = 4000
if (nivel < 1000){
    console.log ("NIVEL FERRO")
}else if (nivel > 1000 && nivel <2001){
    console.log ("NIVEL BRONZE")
}else if (nivel >2000 && nivel <5001){
    console.log (" NIVEL PRATA")
}else if (nivel >5000 && nivel <7001){
    console.log("NIVEL OURO")
}else if (nivel >7000 && nivel <= 8000){
    console.log ("NIVEL PLATINA")
}else if (nivel >8000 && nivel <=9000){
    console.log ("NIVEL ASCENDENTE")
}else if (nivel >9000 && nivel <= 10000){
    console.log("NIVEL IMORTAL")
}else { nivel > 10000
    console.log ("NIVEL RADIANTE")
}
