console.log("test");

let fruitsAndBerries = [
    "Mango",
    "Blueberry",
    "Strawberry",
    "Kiwi",
    "Äpple",
    "Päron"
  ];

let milkshakes = fruitsAndBerries.map((fruit) => fruit + " milkshake");

let myName = "Brandon";

let myHeading = document.querySelector("h1");
console.log(myHeading.innerText);

// myHeading.innerText = "DOM from Javascript"

//Skapa nytt element
let p = document.createElement("p");
p.innerText = "En paragraf!";
document.body.appendChild(p)

//Skriv ut våra milkshakes

let div = document.querySelector("#root");

milkshakes.forEach(milkshake =>
    {
        let shake = document.createElement("p");
        shake.innerText = milkshake;
        div.appendChild(shake)
    })