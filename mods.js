const myself = 'Adan R'

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
} ;

toUpper(myself) ; // I know this is a funtion pulled from the video but it was meant for testing purposes


function carYear(y1, y2) {
    return y1 * y2 ;
} ;

let result = carYear(489, 4);
document.getElementById("bel").innerHTML = "My Grandfather owned a" + " " + result + " " + "Chevy Bel-Air." ;

const seller = {
    firstName: 'Some' ,
    lastName: 'guy' ,
    date: 1962 ,
    fullSeller: function() {
        return this.firstName + " " + this.lastName + " " + "in" + " " + this.date ;
    }
} ;

document.getElementById("sell").innerHTML = seller.fullSeller() + " " + "sold it to him for a couple hundred bucks." ;

let bodyColor = "Copper"

function questionAnswer() {
    document.getElementById("dacolor").innerHTML = bodyColor ;
} ;