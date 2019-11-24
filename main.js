var quantity = parseInt(prompt("Questo programmino calcola somma e media dei primi n numeri. Quanto desideri che sia n?"));
while (isNaN(quantity)==true) {
    quantity = parseInt(prompt("Inserisci un dato valido, ovvero un numero intero:"));
}
var sum = 0;
var mean = 0;
for (var i = 1; i <= quantity; i++) {
    sum += i;
}
mean = sum/(i-1);
document.writeln("I primi "+quantity+" numeri sommati valgono: " + sum +"<br>");
document.writeln("La media dei primi "+quantity+" numeri vale: " + mean);
