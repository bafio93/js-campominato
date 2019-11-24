//Section 1: Generating the bomb array.

function setDifficulty() { //Asking for difficulty.
    var fRisultato = parseInt(prompt("Scegli la difficoltà alla quale desideri giocare: con 0 avrai un range di 100, con 1 di 80 e con 2 di 50 (0/1/2)"));
    if (fRisultato == 0) {
        fRange = 100;
    }
    else if (fRisultato == 1) {
        fRange = 80;
    }
    else {
        fRange = 50;
    }
    return fRange;
} //This function asks the player for difficulty. If 0, range = 100; if 1, range = 80; if 2, range = 50.
var range = setDifficulty(); //This is used for defining range and difficulty. Let's start with 100.
console.log(range);
function randomGenerator(fRange) {
    var fRisultato = Math.ceil(Math.random()*fRange);
    return fRisultato;
} //This function generates a random number between 1 and range. f is used to indicate all function-only variables.
var listaMine = []; //Let's generate an array of 16 bombs.
var elementoCorrente = 0; //This is used in the for cycle, in order to check wether a bomb is already placed in that number.
for (var i = 0; i < 16; i++) {
    elementoCorrente = randomGenerator(range);
    while (listaMine.includes(elementoCorrente)==true) {
        elementoCorrente = randomGenerator(range);
    }
    listaMine[i] = elementoCorrente;
} //Populating the array, using a while cycle in order to avoid having two bombs placed on the same number.

//Section 2: Checking user's input.

function playerInput(fRange) {
    var fRisultato = parseInt(prompt("Inserisci un numero intero tra 1 e "+fRange+":"));
    while ((fRisultato>fRange)||(fRisultato<1)||(isNaN(fRisultato))) {
        fRisultato = parseInt(prompt("Input non valido. Inserisci un nuovo numero intero tra 1 e "+fRange+":"));
    }
    return fRisultato;
} //This function asks the player for an input, and checks for its validity: is it <1? Is it > range? Is it a number?
var listaPlayer = []; //We'll use an array to keep track of the player's inputs.
elementoCorrente = 0; //Reusing the var defined above, used in the first for cycle.
var flagLoseCondition = 0; //This flag is used to define wether a player's input was a bomb or not.
var points = 0; //This var is both a counter for the while cycle and points awarded to the player.
while ((points<(range-16))&&(flagLoseCondition==0)) { //The condition is: we need to insert numbers until we find every valid combination, or until we find a bomb.
    console.log(listaPlayer);
    elementoCorrente = playerInput(range);
    while (listaPlayer.includes(elementoCorrente)==true) {
        alert("Stai cercando di inserire un numero già scelto! Ti ricordo che hai già inserito: "+listaPlayer);
        elementoCorrente = playerInput(range);
    }
    if (listaMine.includes(elementoCorrente)==true) {
        flagLoseCondition = 1;
    }
    listaPlayer[points] = elementoCorrente;
    points ++;
}
console.log(listaMine); //So we can cheat, if we so wish.
if (flagLoseCondition == 1) {
    alert("Purtroppo hai trovato una mina!!! In compenso hai ottenuto: "+(points-1)+" punti!!!")
}
else {
    alert("Hai vinto! Hai ottenuto: "+points+" punti!!!")
}
