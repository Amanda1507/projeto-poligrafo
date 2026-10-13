
'use strict';

function realizarSorteio() {
    const min = 1;
    const max = 3;

    const numeroSorteado = Math.floor(
        Math.random() * (max - min + 1)
    ) + min;

    const caixa = document.getElementById('caixa');

    const card = {
        1: {
            classificacao: 'CLASSIFICAÇÃO Nº 01',
            titulo: 'INOCENTE',
            texto: 'Você conhecia Audryn, mas não teve participação no crime. Agora, precisa provar que não tem relação com sua morte.',
            cor: '#C9D6DF'
        },

        2: {
            classificacao: 'CLASSIFICAÇÃO Nº 02',
            titulo: 'CÚMPLICE',
            texto: 'Você sabia que alguém queria prejudicar Audryn e forneceu informações que ajudaram o responsável. Agora, teme que descubram seu envolvimento.',
            cor: '#db580c'
        },

        3: {
            classificacao: 'CLASSIFICAÇÃO Nº 03',
            titulo: 'CULPADA',
            texto: 'Você é responsável pela morte de Audryn. Acreditava ter planejado tudo perfeitamente, mas não contava com a investigação.',
            cor: '#8B0415'
        }
    };

    const cards = card[numeroSorteado];

    caixa.innerHTML = `
        <div class="card-papel" style="--cor-papel: ${cards.cor}">

            <p class="class">${cards.classificacao}</p>

            <hr>

            <h1 class="titulo">${cards.titulo}</h1>

            <p class="texto">${cards.texto}</p>

            <p class="confidencial">
                DOCUMENTO CONFIDENCIAL • NÃO MOSTRE AOS OUTROS
            </p>

        </div>

        <a href="pergunta.html"><button class="botao2">
            <p>Iniciar teste 🠖</p>
        </button></a>
    `;
}
