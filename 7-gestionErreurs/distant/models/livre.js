"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livre = void 0;
const prixInvalidError_1 = require("../errors/prixInvalidError");
const anneePublicationInvalid_1 = require("../errors/anneePublicationInvalid");
class Livre {
    constructor(titre, auteur, anneePublication = new Date().getFullYear(), prix) {
        this._AnneePublication = 1995;
        // Vérification dju prix, il ne doit pas être négatif
        if (prix < 0) {
            throw new prixInvalidError_1.PrixInvalidError();
        }
        const anneeActuelle = new Date().getFullYear();
        // Vérification de l'année de publication, elle doit être réaliste
        if (anneePublication < 1800) {
            throw new anneePublicationInvalid_1.AnneePublicationInvalide(" L'année de publication ne peut être inférieur a 1800");
        }
        else if (anneePublication > anneeActuelle) {
            throw new anneePublicationInvalid_1.AnneePublicationInvalide("L'année de publciation ne peut être ultérieur a m'année en cours ");
        }
        this._AnneePublication = anneePublication;
        this._Titre = titre;
        this.Auteur = auteur;
        this._Prix = prix;
    }
    // Prop's
    // (set) => titre en ecriture
    set Titre(titre) {
        this._Titre = titre;
    }
    // (get) => titre en lecture
    get Titre() {
        return this._Titre;
    }
    // (set) 
    set AnneePublication(anneePublication) {
        this._AnneePublication = anneePublication;
    }
    // (get) 
    get AnneePublication() {
        return this._AnneePublication;
    }
    set Prix(prix) {
        this._Prix = prix;
    }
    // (get) 
    get Prix() {
        return this._Prix;
    }
    // Méthodes => Comportements logique a notre class (la rendre plus dynamique et fonctionnel pour la logique métier)
    AfficherLivre() {
        console.log("------------");
        console.log(`Descrition : \n - ${this._Titre} \n - ${this.Auteur} \n - ${this._AnneePublication}`);
        console.log("------------");
    }
}
exports.Livre = Livre;
