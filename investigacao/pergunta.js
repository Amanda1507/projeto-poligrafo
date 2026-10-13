'use strict';

const botaoNext = document.getElementById('next');
const botaoPrevius = document.getElementById('previus');
const botaoSim = document.getElementById('sim');
const botaoNao = document.getElementById('nao');

const numero = document.getElementById('numero');
const pergunta = document.getElementById('pergunta');
const aviso = document.getElementById('aviso');

const main = document.getElementById('main');
const resultado = document.getElementById('resultado');

const perguntas = [
    'Você conhecia a vítima?',
    'Você e a vítima tinham um bom relacionamento?',
    'Você teve alguma discussão com a vítima recentemente?',
    'Você tinha algum motivo para querer prejudicar a vítima?',
    'Você estava em casa naquela noite?',
    'Alguém pode confirmar o que você está dizendo?',
    'Você percebeu alguma atitude estranha antes do crime?',
    "Você teve acesso a alguma bebida ou alimento que Audryn consumiu naquela noite?",
    'Existe alguma evidência que possa relacionar você ao crime?',
    'Você escondeu alguma informação durante este interrogatório?'
];

const respostas = Array(perguntas.length).fill(null);

let indicePergunta = 0;

function mostrarPergunta() {
    numero.textContent =
        `Pergunta ${indicePergunta + 1} de ${perguntas.length}`;

    pergunta.textContent = perguntas[indicePergunta];

    botaoSim.classList.toggle(
        'selecionado',
        respostas[indicePergunta] === true
    );

    botaoNao.classList.toggle(
        'selecionado',
        respostas[indicePergunta] === false
    );

    botaoPrevius.disabled = indicePergunta === 0;

    botaoNext.textContent =
        indicePergunta === perguntas.length - 1
            ? 'Finalizar interrogatório'
            : 'Próxima 🠖';

    aviso.textContent = '';
}

function selecionarResposta(valor) {
    respostas[indicePergunta] = valor;

    botaoSim.classList.toggle('selecionado', valor === true);
    botaoNao.classList.toggle('selecionado', valor === false);

    aviso.textContent = '';
}

botaoSim.addEventListener('click', function () {
    selecionarResposta(true);
});

botaoNao.addEventListener('click', function () {
    selecionarResposta(false);
});

function next() {
    if (respostas[indicePergunta] === null) {
        aviso.textContent = 'Selecione Sim ou Não antes de continuar.';
        return;
    }

    if (indicePergunta < perguntas.length - 1) {
        indicePergunta++;
        mostrarPergunta();
    } else {
        finalizarInterrogatorio();
    }
}

function previus() {
    if (indicePergunta > 0) {
        indicePergunta--;
        mostrarPergunta();
    }
}

function finalizarInterrogatorio() {
    const contador = respostas.filter(
        resposta => resposta === true
    ).length;

    let classificacao;
    let mensagem;

    if (contador <= 5) {
        classificacao = 'INOCENTE';
        mensagem =
            'Suas respostas levantaram poucas suspeitas. ' +
            'Você não parece ter um envolvimento significativo no caso.';

    } else if (contador <= 7) {
        classificacao = 'CÚMPLICE';
        mensagem =
            'Suas respostas levantaram suspeitas. ' +
            'Talvez você saiba mais sobre o caso do que revelou.';

    } else {
        classificacao = 'CULPADA';
        mensagem =
            'Suas respostas levantaram fortes suspeitas. ' +
            'A investigação aponta para um possível envolvimento ' +
            'na morte de Audryn Sampaio.';
    }

    document.getElementById('classificacao').textContent =
        classificacao;

    document.getElementById('mensagem').textContent =
        mensagem;

    document.getElementById('pontuacaoFinal').textContent =
        `Pontuação: ${contador} de ${perguntas.length}`;

    main.hidden = true;
    resultado.hidden = false;
}

botaoNext.addEventListener('click', next);
botaoPrevius.addEventListener('click', previus);

mostrarPergunta();
