export class NiveauxInvalid extends Error{
    constructor(message : string = "Le niveau du livre n'est pas reconnus... (débutant, intermédiaire, avancé])"){
        super(message)
        this.name = "NiveauxInvalid"
    }
}