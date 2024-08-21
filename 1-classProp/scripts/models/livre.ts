export class Livre{
    // Attributs
    private _Titre! : string; // Doit être iniutialisé au plus tard au premier appel
    public Auteur? : string; // Mon éléments est nullable
    private _AnneePublication : number | undefined = 1995;

    // Prop's
    
    // (set) => titre en ecriture
    set Titre(titre : string){
        this._Titre = titre;
    }

    // (get) => titre en lecture
    get Titre() : string{
        return this._Titre;
    }

    // (get) Année de publication en lecture seule
    get AnneePublication() : number | undefined{
        return this._AnneePublication;
    }

    // Méthodes => Comportements logique a notre class (la rendre plus dynamique et fonctionnel pour la logique métier)
    afficherLivre() : void {
        console.log(`Descrition : \n - ${this._Titre} \n - ${this.Auteur} \n - ${this._AnneePublication}`);
    }
}