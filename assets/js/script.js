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



const clock = setInterval(function () {
    
    const deadline = (new Date("2023, 9, 6, 09:30:00")).getTime(); // domani 
    //console.log(deadline);
    const timeRNow = new Date().getTime(); // ora
    console.log(timeRNow);
    
    // data di domani - data di oggi / 1000
    const remainingTime = deadline - timeRNow; // tempo che rimane all'ora X
    console.log(remainingTime);
    
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.querySelector(".countdown").innerHTML = `${hours(2,0)}, ${minutes(2,0)}, ${seconds(2,0)}`;
}, 1000);




