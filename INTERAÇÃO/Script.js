//Pegar os elementos HTML que vc quer interagir
let caixa = document.querySelector("#caixa");
let btnMsgAuto = document.querySelector("#btnMsgAuto");
let TxtMsg = document.querySelector("#TxtMsg");
let btnenviaMsg = document.querySelector("#btnenviaMsg");
let btnVisual = document.querySelector("#btnVisual");

// Ação de clique no botão
// Listeners: ouvinte (vigia)
// elementoVigiado.addEventListener("evento", funcaoASerChamada);
btnMsgAuto.addEventListener("click", enviarMsgAutomatica);

//Funções
function enviarMsgAutomatica(evento) {
    // Alterar o HTML de um elemento
    caixa.innerHTML = "Este <b> texto</b> é automatico" + "<br> <img src=kayest.jpg>";
    // Versão Dandan:
    // caixa.innerHTML = "ESTE <b>textto</b> é automatico<br /><img src='kayest' />";

    // Salve uma imagem na pasta do projeto
    // Ao clicar no botão, mostre a mensagem acima e uma foto abaixo
}

btnenviaMsg.addEventListener("click", enviaMensagem);

function enviaMensagem(evento){
    //Pegando informação digitada no campo de formulário
    let msg = TxtMsg.value; //-> Pegando / Get 
    caixa.innerHTML += "<br />" + msg +"<br />";

    //Limpar a caixa de texto

    TxtMsg.value = ""; // Definido / Set
}

btnVisual.addEventListener("click", mudarVisual);

function mudarVisual(evento){
    // Acessar o css do elemento através do style
    caixa.style.backgroundColor = "#ffcc00";
    caixa.style.borderStyle = "dashed";
}