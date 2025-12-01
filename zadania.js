// zadanie 7

let cena = 100;
const RABAT = 0.15;

cena_z_rabatem = (cena * RABAT)

document.write(`Cena przed rabatem ${cena} <br>`)
document.write(`Cena po rabacie: ${cena_z_rabatem}`)

// zadanie 8

let a = 18

if(a % 2 == 0){
    document.write("<br> Liczba jest parzysta! <br>")
} else {
    document.write("<br> Liczba nie jest parzysta!")
};

// zadanie 9

const dlugosc = 2;
const szerokosc = 3;
let pole = szerokosc * dlugosc;

document.write(`pole prostokąta to: ${pole}`)

// zadanie 10

let licznik = 5;

++licznik
console.log(licznik)
++licznik
console.log(licznik)
--licznik

// zadanie 11
const sekundy = 120;
let minuty = Math.floor(sekundy / 60)
let remaining_seconds = (sekundy % 60)

document.write(`<br> ${sekundy} sekund to ${minuty} minut i ${remaining_seconds} sekund.`)