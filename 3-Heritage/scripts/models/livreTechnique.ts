import { Livre } from "./livre";
// Extends pour établir la relation d'héritage avec le parent 
export class LivreTechnique extends Livre{
    private _Domaine! : string;
    private _Niveau! : string;

    get Domaine() : string {return this._Domaine};
    set Domaine(domaine : string){this._Domaine = domaine};

    get Niveau() : string {return this._Niveau};
    set Niveau(niveau : string){this._Niveau = niveau};

    AfficherLivre(): void {
        // Utilisation du préfixe super afin de récupéré la méthode du parent et la specialisation dans l'enfant
        super.AfficherLivre();
        console.log(` - Domaine : ${this._Domaine}`);
        console.log(` - Niveau : ${this._Niveau}`);
        console.log("------------");
    }
}