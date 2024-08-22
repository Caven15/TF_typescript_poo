import { Livre } from "./livre";

export class Bibliotheque {
    // Attributs
    public Nom!: string;
    private _Livres: Map<string, Livre> = new Map();

    // Prop's
    //...

    // Méthodes

    // Ajouter un livre
    AjouterLivre(livre: Livre): void {
        if (!this._Livres.has(livre.Titre)) {
            this._Livres.set(livre.Titre, livre);
        }
    }

    // Supprimer un livre
    SupprimerLivre(titre: string): void {
        if (this._Livres.has(titre)) {
            this._Livres.delete(titre);
        }
    }

    // Obtenir un livre
    ObtenirLivre(titre: string): Livre | undefined {
        return this._Livres.get(titre)
    }

    // Afficher livres
    AfficherLivres(): void {
        this._Livres.forEach(livre => {
            livre.AfficherLivre()
        })
    }
}