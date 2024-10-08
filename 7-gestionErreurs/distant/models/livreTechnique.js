"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivreTechnique = void 0;
const livre_1 = require("./livre");
const niveauInvalid_1 = require("../errors/niveauInvalid");
// Extends pour établir la relation d'héritage avec le parent 
class LivreTechnique extends livre_1.Livre {
    constructor(titre, auteur, anneePublication = new Date().getFullYear(), domaine, niveau, prix) {
        super(titre, auteur, anneePublication, prix);
        this._Domaine = domaine;
        this._Niveau = niveau;
    }
    get Domaine() { return this._Domaine; }
    ;
    set Domaine(domaine) { this._Domaine = domaine; }
    ;
    get Niveau() { return this._Niveau; }
    ;
    set Niveau(niveau) { this._Niveau = niveau; }
    ;
    AfficherLivre() {
        // Utilisation du préfixe super afin de récupéré la méthode du parent et la specialisation dans l'enfant
        super.AfficherLivre();
        console.log(` - Domaine : ${this._Domaine}`);
        console.log(` - Niveau : ${this._Niveau}`);
        console.log("------------");
    }
    QuiSuisJe() {
        console.log("je suis l'instance d'un objet de type LivreTechique");
    }
    changerNiveau(niveau) {
        const niveauxValides = ["débutant", "intermédiaire", "avancé"];
        // Vérification si le niveau est valide
        if (!niveauxValides.includes(niveau.toLowerCase())) {
            throw new niveauInvalid_1.NiveauxInvalid();
        }
    }
}
exports.LivreTechnique = LivreTechnique;
