
CalculoDePartidaRanqueada (10, 3 )
    


function CalculoDePartidaRanqueada ( quantidadeDeVitorias, quantidadeDeDerrotas){

    let resultado = quantidadeDeVitorias - quantidadeDeDerrotas

    let nivel = resultado

    for (let i = " O HEROI TEM SALDO DE "; i ; i++)

    

    if (resultado < 10){
        console.log (i + nivel + " ESTÁ NO NIVEL FERRO ")
    
    }else if (resultado >10 && resultado <=15){
        console.log (i + nivel + " ESTÁ NO NIVEL BRONZE ")
    
    }else if (resultado > 15 && resultado < 20){
        console.log (i + nivel + " ESTÁ NO NIVEL PRATA")

    }else if (resultado >= 20 && resultado < 30){
        console.log (i + nivel + " ESTÁ NO NIVEL OURO ")

    }else if (resultado >= 30 && resultado < 50){
        console.log (i + nivel + " ESTÁ NO NIVEL DIAMANTE")
    
    }else if (resultado >= 50 && resultado < 101){
        console.log (i + nivel + " ESTÁ NO NIVEL LENDARIO ")

    }else {resultado >= 101 
        console.log (i + nivel + " ESTÁ NO NIVEL IMORTAL ")

    }
    return resultado
}