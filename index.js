let nomeDoHeroi = "Mulher Maravilha"
let xpDoHeroi = "8001"
let nivel = " "

if (xpDoHeroi > "1000" && xpDoHeroi <= "2001"){
    nivel = "Ferro"
}else if (xpDoHeroi > "2001" && xpDoHeroi <= "3001"){
    nivel = "Bronze"
}else if (xpDoHeroi > "3001" && xpDoHeroi <= "4001"){
    nivel = "Prata"
}else if (xpDoHeroi > "4001" && xpDoHeroi <= "5001"){
    nivel = "Ouro"
}else if (xpDoHeroi > "5001" && xpDoHeroi <= "6001"){
    nivel = "Platina"
}else if (xpDoHeroi > "6001" && xpDoHeroi <= "7001"){
    nivel = "Ascendente"
}else if (xpDoHeroi > "7001" && xpDoHeroi <= "8001"){
    nivel = "Imortal"
}else if(xpDoHeroi > "8001"){
    nivel = "Radiante"
}

console.log("O Herói de nome:" + nomeDoHeroi + " está no nível: " + nivel )
    
