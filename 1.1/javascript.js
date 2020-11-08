/*
 * generates random natural numbers between 1 and foo
 */
const roll = function (dice) {    
    return Math.floor(Math.random() * dice) + 1;
}

// usage
let x = roll(6);   // generates a random natural number such that 1 < x < 37

let myId = document.getElementById('myId');
myId.innerHTML = x;

myId.style.border = "3px solid black";
myId.style.padding = "10px";
myId.style.width = "3%";
myId.style.textAlign = "center";
myId.style.fontSize = "2em";

