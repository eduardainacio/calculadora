/* CAPTURA O DISPLAY DA CALCULADORA */

// Guarda o campo onde os números aparecem.
const display = document.getElementById("display");


/* ADICIONAR NÚMEROS E OPERADORES */
function adicionar(valor){

    // Valor que já existe no display
    let expressao = display.value;

    // Lista de operadores
    const operadores = ["+","-","*","/","%"];

    // Último caractere digitado
    let ultimo = expressao.slice(-1);


    /* Não deixa começar com operadores */
    if(expressao === "" && operadores.includes(valor)){
        return;
    }


    /* Não permite dois operadores seguidos */
    if(
        operadores.includes(ultimo) &&
        operadores.includes(valor)
    ){
        return;
    }

    /* Evita dois pontos decimais no mesmo número */
    if(valor === "."){

        // Divide a expressão pelos operadores
        let partes = expressao.split(/[\+\-\*\/%]/);

        // Último número digitado
        let ultimoNumero = partes[partes.length - 1];
        if(ultimoNumero.includes(".")){
            return;
        }
    }
    // Adiciona normalmente
    display.value += valor;
}


/* LIMPAR DISPLAY */
function limparDisplay(){
    display.value = "";
}


/* APAGAR ÚLTIMO CARACTERE */
function apagarUltimo(){
    display.value = display.value.slice(0,-1);
}


/* SUPORTE AO TECLADO */
document.addEventListener("keydown",function(event){

    const tecla = event.key;

    // Números
    if(!isNaN(tecla)){
        adicionar(tecla);
    }

    // Operadores
    if(["+","-","*","/","%","."].includes(tecla)){
        adicionar(tecla);
    }

    // Backspace
    if(tecla === "Backspace"){
        apagarUltimo();
    }

    // ESC limpa tudo
    if(tecla === "Escape"){
        limparDisplay();
    }

    // Enter envia o formulário
    if(tecla === "Enter"){
    event.preventDefault();
    calcular();
    }
});

/* ANIMAÇÃO DOS BOTÕES */

// Seleciona todos os botões
const botoes = document.querySelectorAll("button");

// Percorre todos
botoes.forEach(botao=>{

    botao.addEventListener("click",()=>{
        // Pequeno efeito de clique
        botao.style.transform="scale(.90)";
        setTimeout(()=>{
            botao.style.transform="scale(1)";
        },100);
    });
});


/* IMPEDIR EXPRESSÕES INVÁLIDAS */

// Guarda todos os cálculos
let historico =

JSON.parse(

localStorage.getItem("historico")

)

|| [];

function abrirHistorico(){
    document .getElementById("historico") .classList.add("ativo");
}

function fecharHistorico(){
    document .getElementById("historico") .classList.remove("ativo");
}

function atualizarHistorico(){
    const lista =
    document.getElementById("listaHistorico");
    lista.innerHTML="";
    historico.forEach(item=>{

        lista.innerHTML += `

        <div class="itemHistorico">
            <div class="conta">
                ${item.conta}
            </div>
            <div class="resultado">
                = ${item.resultado}
            </div>
        </div>
        `;
    });
}

async function calcular(){

    const expressao = display.value;

    if(expressao==""){

        return;

    }

    const resposta = await fetch("calcular.php",{

        method:"POST",

        headers:{

            "Content-Type":

            "application/x-www-form-urlencoded"

        },

        body:

        "expressao="+

        encodeURIComponent(expressao)

    });

    const dados = await resposta.json();

    if(dados.resultado){

        adicionarHistorico(

            expressao,

            dados.resultado

        );

        display.value=dados.resultado;

    }

}
function adicionarHistorico(expressao,resultado){

    historico.push({

        conta:expressao,

        resultado:resultado

    });

    localStorage.setItem(

        "historico",

        JSON.stringify(historico)

    );

    atualizarHistorico();

}

window.onload=function(){

    atualizarHistorico();

}