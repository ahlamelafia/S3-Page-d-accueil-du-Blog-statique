
let nombres = [23, 15, 42, 9, 31, 18, 42, 5];

// Initialisation du maximum et du minimum
let maximum = nombres[0];
let minimum = nombres[0];

let positionMax = 0;
let positionMin = 0;

// Recherche du maximum et du minimum
for (let i = 1; i < nombres.length; i++) {

    if (nombres[i] > maximum) {
        maximum = nombres[i];
        positionMax = i;
    }

    if (nombres[i] < minimum) {
        minimum = nombres[i];
        positionMin = i;
    }
}

console.log("Maximum :", maximum, "(Index :", positionMax + ")");
console.log("Minimum :", minimum, "(Index :", positionMin + ")");

// Recherche d'une valeur
let recherche = 31;
let position = -1;

/*
La position est initialisée à -1 car cet index
n'existe pas dans un tableau. Il indique que
la valeur recherchée n'a pas encore été trouvée.
*/

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === recherche) {
        position = i;
        break;
    }
}

if (position !== -1) {
    console.log("La valeur " + recherche + " est présente dans le tableau.");
} else {
    console.log("La valeur " + recherche + " est absente du tableau.");
}