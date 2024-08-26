"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnneePublicationInvalide = void 0;
class AnneePublicationInvalide extends Error {
    constructor(message = "L'année de publication est invalide...") {
        super(message);
        this.name = "AnneePublicationInvalide";
    }
}
exports.AnneePublicationInvalide = AnneePublicationInvalide;
