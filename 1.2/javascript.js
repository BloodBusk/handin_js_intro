//get ids
let myId0 = document.getElementById('myId0');
let myId1 = document.getElementById('myId1');
let myId2 = document.getElementById('myId2');
let myId3 = document.getElementById('myId3');
let myId4 = document.getElementById('myId4');

//variables global
let array = [];
let length = 5;

//loop that rolls random number and adds to array
for(let i = 0; i < length; i++) {

    //roll with parameter max dice eyes
    const roll = function (eyes) {
        return Math.floor(Math.random() * eyes) + 1;
    }
    // usage
    let x = roll(6); // generates a random natural number such that 1 < x < 6
    array[i] = x;
    
}

//prints array i to specified id
myId0.innerHTML = array[0];
myId1.innerHTML = array[1];
myId2.innerHTML = array[2];
myId3.innerHTML = array[3];
myId4.innerHTML = array[4];


