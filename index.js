let nomeDoHeroi = "Mulher Maravilha"
let xpDoHeroi = "8000"
let nivel = ""

if (xpDoHeroi <= "1000"){
    nivel = "Ferro"
}else if (xpDoHeroi <= "2001"){
    nivel = "Bronze"
}else if (xpDoHeroi <= "3001"){
    nivel = "Prata"
}else if (xpDoHeroi <= "4001"){
    nivel = "Ouro"
}else if (xpDoHeroi <= "5001"){
    nivel = "Platina"
}else if (xpDoHeroi <= "6001"){
    nivel = "Ascendente"
}else if (xpDoHeroi <= "7001"){
    nivel = "Imortal"
}else if(xpDoHeroi <= "10001"){
    nivel = "Radiante"
}

console.log("O Herói de nome:" + nomeDoHeroi + " está no nível: " + nivel )
    
