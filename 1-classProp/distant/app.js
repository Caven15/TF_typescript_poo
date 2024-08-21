"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const livre_1 = require("./models/livre");
const livre1 = new livre_1.Livre();
livre1.Titre = "Le seigneur des anneaux"; // Accesible en écriture & lecture
console.log(`Le titre de mon livre 1 est : ${livre1.Titre}`);
livre1.Auteur = "Jhon";
console.log(livre1.Auteur); // Accesible en lecture
console.log(livre1.AnneePublication); // Lecture autorisée
// livre1.AnneePublication = 1994         // De par mes props l'éctriture est interdite...
livre1.afficherLivre();
