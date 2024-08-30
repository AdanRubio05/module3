const myself = 'Adan R'

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

toUpper(myself) ; // I know this is a funtion pulled from the video but it was meant for testing purposes

const car = {
    carName: 'Bel-Air' ,
    carEngine: '210' ,
    carColor: 'Copper' ,
    carDate: '1962' ,
}

function carYear(y1, y2) {
    return y1 * y2 ;
}

let result = carYear(489, 4);
document.getElementById("bel").innerHTML = "My grandfather owned a" + " " + result + " " + car ;