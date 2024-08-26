"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NiveauxInvalid = void 0;
class NiveauxInvalid extends Error {
    constructor(message = "Le niveau du livre n'est pas reconnus... (débutant, intermédiaire, avancé])") {
        super(message);
        this.name = "NiveauxInvalid";
    }
}
exports.NiveauxInvalid = NiveauxInvalid;
