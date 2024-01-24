const quantidade = document.getElementById('quantidade')
const dataUltimoVale = document.getElementById('dataUltimoVale')
const ValorUltimoVale = document.getElementById('valorUltimoVale')

const data = new Date();
const dataEntregaUltimoVale = new Date(2024,0,18)
const diaUltimoVale = dataEntregaUltimoVale.getDate()
const mesUltimoVale = dataEntregaUltimoVale.getMonth() + 1

const dataUltimoValeFormat = diaUltimoVale + " / " + mesUltimoVale
const valorConversaoParaDia = 86400000;
const valorDovaleEntregue = 210;
var quantidadeMarmita = valorDovaleEntregue / 14;
 

 function ehDiaUlil() {
    var diaDaSemana = data.getDay();

    return diaDaSemana == 6 || diaDaSemana == 7 ? false : true;
}

function verificaQuantidade() {
    if(quantidadeMarmita < 1) {
        quantidade.style.color = "red";
    }
}

function calculaMarmita() {

    if(ehDiaUlil()){

        quantidadeMarmita--; 

        quantidade.innerHTML = quantidadeMarmita
        dataUltimoVale.innerHTML = dataUltimoValeFormat
        ValorUltimoVale.innerHTML = ` R$ ${valorDovaleEntregue}`

        verificaQuantidade()
    }
}


calculaMarmita()

setInterval(calculaMarmita, 5000)
