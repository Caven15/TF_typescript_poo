export class AnneePublicationInvalide extends Error{
    constructor(message : string = "L'année de publication est invalide..."){
        super(message)
        this.name = "AnneePublicationInvalide"
    }
}