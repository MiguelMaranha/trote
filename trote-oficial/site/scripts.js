function calcular() {
    // ── ITENS AVULSOS ──────────────────────────────────────────────
    // Pontuação unitária conforme regulamento seção 3.1.2
    let qtdeArroz     = Math.max(0, Number(document.getElementById("qtdeArroz").value));
    let qtdeArroz1kg  = Math.max(0, Number(document.getElementById("qtdeArroz1kg").value));
    let qtdeFeijao    = Math.max(0, Number(document.getElementById("qtdeFeijao").value));
    let qtdeFeijao1kg = Math.max(0, Number(document.getElementById("qtdeFeijao1kg").value));
    let qtdeMacarrao  = Math.max(0, Number(document.getElementById("qtdeMacarrao").value));
    let qtdeOleo      = Math.max(0, Number(document.getElementById("qtdeOleo").value));

    let pontos = (qtdeArroz * 10) + (qtdeArroz1kg * 2) + (qtdeFeijao * 8)
               + (qtdeFeijao1kg * 4) + (qtdeMacarrao * 2) + (qtdeOleo * 4);

    // ── META DE KITS (proporcional ao nº de alunos) ────────────────
    // Valores definidos nas Tabelas 2 e 4 do regulamento.
    // A associação cor → equipe foi definida em sorteio no dia 24/02/2026.
    let cor = document.getElementById("cor").value;
    let metaKit;
    if      (cor === "verde")    metaKit = 61;   // Computação A (CC + SI)
    else if (cor === "amarelo")  metaKit = 54;   // Comunicação Social
    else if (cor === "cinza")    metaKit = 51;   // Psicologia
    else if (cor === "laranja")  metaKit = 21;   // Letras
    else if (cor === "marrom")   metaKit = 88;   // Medicina
    else if (cor === "preto")    metaKit = 60;   // Computação B (ES)
    else if (cor === "rosa")     metaKit = 44;   // Ciências Contábeis
    else if (cor === "roxo")     metaKit = 42;   // Engenharias
    else if (cor === "vermelho") metaKit = 32;   // Administração

    // Validação: kits não pode ser negativo
    let qtdeKits = Math.max(0, Number(document.getElementById("qtdeKits").value));

    // Lógica proporcional: meta = 5000 pts; excedente pontua linearmente
    if (qtdeKits >= metaKit) {
        pontos += 5000;
        if (qtdeKits > metaKit) {
            pontos += (qtdeKits - metaKit) * (5000 / metaKit);
        }
    } else {
        pontos += qtdeKits * (5000 / metaKit);
    }

    // ── META DE SUPLEMENTOS ────────────────────────────────────────
    // 1 suplemento para cada 2 alunos → Math.ceil(metaKit / 2)
    // Confere com Tabela 5 do regulamento
    let metaSuplementos = Math.ceil(metaKit / 2);

    let qtdeSuplementos = Math.max(0, Number(document.getElementById("qtdeSuplementos").value));

    if (qtdeSuplementos >= metaSuplementos) {
        pontos += 5000;
        if (qtdeSuplementos > metaSuplementos) {
            pontos += (qtdeSuplementos - metaSuplementos) * (5000 / metaSuplementos);
        }
    } else {
        pontos += qtdeSuplementos * (5000 / metaSuplementos);
    }

    // ── META DO LEITE ──────────────────────────────────────────────
    // 1 litro por aluno → metaLeite = metaKit (Tabela 6)
    let metaLeite = metaKit;
    let qtdeLeite = Math.max(0, Number(document.getElementById("qtdeLeite").value));

    if (qtdeLeite >= metaLeite) {
        pontos += 5000;
        if (qtdeLeite > metaLeite) {
            pontos += (qtdeLeite - metaLeite) * (5000 / metaLeite);
        }
    } else {
        pontos += qtdeLeite * (5000 / metaLeite);
    }

    // ── META DE DOAÇÕES DE SANGUE ──────────────────────────────────
    // 1 doação para cada 2 alunos → metaSangue = metaSuplementos (Tabela 7)
    let metaSangue = metaSuplementos;
    let qtdeSangue = Math.max(0, Number(document.getElementById("qtdeSangue").value));

    if (qtdeSangue >= metaSangue) {
        pontos += 5000;
        if (qtdeSangue > metaSangue) {
            pontos += (qtdeSangue - metaSangue) * (5000 / metaSangue);
        }
    } else {
        pontos += qtdeSangue * (5000 / metaSangue);
    }

    // ── NOITE DE ENCERRAMENTO ──────────────────────────────────────
    // Apresentação cultural: criatividade + performance + contextualização (máx 500 cada)
    let criatividade  = Math.min(500, Math.max(0, Number(document.getElementById("criatividade").value)));
    let performance   = Math.min(500, Math.max(0, Number(document.getElementById("performance").value)));
    let contextualizacao = Math.min(500, Math.max(0, Number(document.getElementById("contextualizacao").value)));

    // Penalidade: -150 pts se ultrapassar 3 minutos (seção 3.2.1)
    let penalidadeApresentacao = Number(document.getElementById("penalidadeApresentacao").value);

    // Mascote: originalidade (máx 200), caracterização (máx 150), atuação (máx 150)
    let mascoteOriginalidade  = Math.min(200, Math.max(0, Number(document.getElementById("mascoteOriginalidade").value)));
    let mascoteCaracterizacao = Math.min(150, Math.max(0, Number(document.getElementById("mascoteCaracterizacao").value)));
    let mascoteAtuacao        = Math.min(150, Math.max(0, Number(document.getElementById("mascoteAtuacao").value)));

    // Caracterização e animação: 0 ou 1000 pts (seção 3.2.3)
    let caracterizacaoAnimacao = Number(document.getElementById("caracterizacaoAnimacao").value);

    // Gincanas / atividades recreativas (seção 3.2.4) — valor livre
    let pontosGincanas = Math.max(0, Number(document.getElementById("pontosGincanas").value));

    pontos += criatividade + performance + contextualizacao - penalidadeApresentacao;
    pontos += mascoteOriginalidade + mascoteCaracterizacao + mascoteAtuacao;
    pontos += caracterizacaoAnimacao + pontosGincanas;

    // ── RESULTADO ─────────────────────────────────────────────────
    // Math.round porque pontuação oficial não usa casas decimais
    document.getElementById("result").innerText =
        "Pontuação total: " + Math.round(pontos) + " pontos";
}
