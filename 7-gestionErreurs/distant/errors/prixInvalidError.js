"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrixInvalidError = void 0;
class PrixInvalidError extends Error {
    constructor(message = "Prix invalide 🚫") {
        super(message);
        this.name = "PrixInvalidError";
    }
}
exports.PrixInvalidError = PrixInvalidError;
