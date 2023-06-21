var resposta;
var tentativa;
document.getElementById("iniciar").onclick = iniciarjogo;
document.getElementById("novamente").onclick = jogarnovamente;


function iniciarjogo() {
    document.getElementById("iniciar").style.display = "none";
    document.getElementById("jogo").style.display = "block";
    document.getElementById("espaco").style.padding= "0px";
    var minimo = 1;
    var maximo = 100;
    var diferenca = maximo - minimo;
    var aleatorio = Math.random();
    resposta = minimo + Math.trunc(diferenca * aleatorio);
    console.log(resposta)
}
function enviarresposta() {
    var tentativa = document.getElementById("tentativa").value;
    if (tentativa == resposta) {
        document.getElementById("palpite").innerText = "Parabéns Você Acertou!";
        document.getElementById("palpite").style.backgroundColor = "green";
        document.getElementById("misterio").value = resposta;

    }
    if (tentativa > resposta) {
        document.getElementById("palpite").innerText = "O número sorteado é menor!";
        document.getElementById("palpite").style.backgroundColor = "yellow";

    }
    if (tentativa < resposta) {
        document.getElementById("palpite").innerText = "O número sorteado é maior!";
        document.getElementById("palpite").style.backgroundColor = "yellow";

    }
}
function jogarnovamente(){
    location.reload();
}