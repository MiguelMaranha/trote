function calcular(){
    let qtdeArroz=Number(document.getElementById("qtdeArroz").value);
    let qtdeFeijao=Number(document.getElementById("qtdeFeijao").value);
    let qtdeMacarrao=Number(document.getElementById("qtdeMacarrao").value);
    let qtdeOleo=Number(document.getElementById("qtdeOleo").value);
    // calcula a pontuação total
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeMacarrao * 2) + (qtdeOleo * 4)

    // pontuação dos kits de alimentação
    // recupera a cor escolhida pelo usuário
    let cor = document.getElementById("cor").value
    let qtdeKits = Number(document.getElementById("qtdeKits").value)
    // estrutura de seleção
    let metaKit // meta do kit de alimentação 
    if (cor == "verde"){
        metaKit = 61
    }
    else if (cor == "amarelo"){
        metaKit = 54
    }
    else if (cor == "cinza"){
        metaKit = 51
    }
    else if (cor == "laranja"){
        metaKit = 21
    }
    else if (cor == "marrom"){
        metaKit = 88
    }
    else if (cor == "preto"){
        metaKit = 60
    }
    else if (cor == "rosa"){
        metaKit = 44
    }
    else if (cor == "roxo"){
        metaKit = 42
    }
    else if (cor == "vermelho"){
        metaKit = 32
    }

    // calcula e soma os pontos do kit
    if (qtdeKits >= metaKit){
    pontos = pontos + 5000 + ((qtdeKits - metaKit) * 50)
    } else {
    pontos = pontos + (qtdeKits * 50)
    }
    

    // mostramos a pontuação total ao usuário
    document.getElementById("result").innerText = "Pontuação total: " + pontos + " pontos"
}