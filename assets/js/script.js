console.log("Miao");

/*

Traccia

Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo 
da tempo immemore:
Da quante ore è composto un giorno? 1g ---> 24h
Da quanti minuti è composta un'ora? 1h ---> 60m
Da quanti secondi è composto un minuto?1m ---> 60s
Da quanti millisecondi è composto un secondo? 1s ---> 1000ms
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date? new date
Esistono dei metodi per trasformare una data in millisecondi? date.parse

*/
// const now = new Date();
// const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
// const hours = now.getHours();
// const minutes = now.getMinutes();
// const seconds = now.getSeconds();
// const milliseconds = now.getMilliseconds();

// console.log(`Today is day ${day} and the time is ${hours}:${minutes}:${seconds}:${milliseconds}.`);

const timeRNow = new Date().getTime();
console.log(timeRNow);

const deadline = (new Date("2023, 09, 06, 09:30:00")).getTime(); // ms che mancano
//console.log(deadline);

const remainingTime = deadline - timeRNow;
console.log(remainingTime);

// function msToTime(deadline) {
//     let milliseconds = Math.floor((deadline % 1000) / 100),
//       seconds = Math.floor((deadline / 1000) % 60),
//       minutes = Math.floor((deadline / (1000 * 60)) % 60),
//       hours = Math.floor((deadline / (1000 * 60 * 60)) % 24);
  
//     hours = (hours < 10) ? "0" + hours : hours;
//     minutes = (minutes < 10) ? "0" + minutes : minutes;
//     seconds = (seconds < 10) ? "0" + seconds : seconds;
  
//     return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
//   }
//   //console.log(msToTime(deadline))


const clock = setInterval(function() {

    document.querySelector(".countdown").innerHTML = deadline;


    if (deadline === 0) {
        clearInterval(clock);
        alert("game over");
    } else {
        deadline--;
    }

}, 1000);

//timer - ora attuale
// data di domani - data di oggi / 1000


