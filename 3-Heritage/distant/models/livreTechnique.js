"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivreTechnique = void 0;
const livre_1 = require("./livre");
class LivreTechnique extends livre_1.Livre {
    get Domaine() { return this._Domaine; }
    ;
    set Domaine(domaine) { this._Domaine = domaine; }
    ;
    get Niveau() { return this._Niveau; }
    ;
    set Niveau(niveau) { this._Niveau = niveau; }
    ;
}
exports.LivreTechnique = LivreTechnique;
