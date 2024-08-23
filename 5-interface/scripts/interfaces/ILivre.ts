export interface ILivre{
    readonly Titre : string;
    readonly Auteur? : string | undefined;
    readonly AnneePublication : number |undefined;
    AfficherLivre() : void;
    QuiSuisJe() : void;
}