import countdown from "./countdown.js";

const tempoParaNiver = new countdown("19 august 2022 00:00:00 GMT-0300")
console.log(tempoParaNiver.total);
const tempos = document.querySelectorAll(" [data-time] ");

function mostrarTempo(){
    tempos.forEach((tempo, index) =>{
        tempo.innerHTML = tempoParaNiver.total[index]
    })
}
mostrarTempo();
setInterval(mostrarTempo, 1000)