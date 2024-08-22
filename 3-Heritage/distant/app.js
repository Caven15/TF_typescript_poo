"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bibliotheque_1 = require("./models/bibliotheque");
const livre_1 = require("./models/livre");
const livreTechnique_1 = require("./models/livreTechnique");
const livre1 = new livre_1.Livre();
livre1.Titre = "Le seigneur des anneaux";
livre1.AnneePublication = 1954;
livre1.Auteur = "Tolkien";
const livre2 = new livre_1.Livre();
livre2.Titre = "Ts pour les nuls 🤯";
livre2.AnneePublication = 2024;
livre2.Auteur = "Tf_fullstack_python_2";
const livre3 = new livre_1.Livre();
livre3.Titre = "Martine à la plage";
livre3.AnneePublication = 2004;
livre3.Auteur = "Jhon Doe";
const livre4 = new livre_1.Livre();
livre4.Titre = "Martine à la plage - 2";
livre4.AnneePublication = 2004;
livre4.Auteur = "Jhon Doe";
const livreTechnique1 = new livreTechnique_1.LivreTechnique();
livreTechnique1.Titre = "Paradigne POO";
livreTechnique1.AnneePublication = 2007;
livreTechnique1.Auteur = "Microsoft";
livreTechnique1.Domaine = "Informatique";
livreTechnique1.Niveau = "expert";
const bibliotheque = new bibliotheque_1.Bibliotheque();
bibliotheque.Nom = "Bibliothèque centrale";
bibliotheque.AjouterLivre(livre1);
bibliotheque.AjouterLivre(livre2);
bibliotheque.AjouterLivre(livre3);
bibliotheque.AjouterLivre(livre4);
bibliotheque.AjouterLivre(livreTechnique1);
// Affichage des livres
bibliotheque.AfficherLivres();
// const nonLivreRecherche : string = "Martine à la plage";
// const livreRecupere : Livre | undefined = bibliotheque.ObtenirLivre(nonLivreRecherche);
// if (livreRecupere){
//     livreRecupere?.AfficherLivre()
// }else{
//     console.log(`Le livre "${nonLivreRecherche}" n'existe pas...`);
// }
// // Suppresion d'un livre
// bibliotheque.SupprimerLivre(nonLivreRecherche);
// console.log("Affichage après suppression :");
// bibliotheque.AfficherLivres();
