import { cache } from "react";
import getDb from "../connection";
import Squadra from "./squadra";
import Giocatore from "./giocatore";
import { Squadra as SquadraType } from "../../typings";

export { default as Squadra } from "./squadra";

/* const getSquadre = cache(async () => {
    const squadre = await Squadra.find();
    return squadre;
}); */

const getSquadre = async () => {
    await getDb();
    const squadre = await Squadra.find();
    return squadre;
};

const getSquadra = async (nomeLink: string) => {
    await getDb();
    const squadra = await Squadra.findOne({nomeLink});
    var arrayDiGiocatori = [];
    if (squadra.giocatori) {
        for (let index = 0; index < squadra.giocatori.length; index++) {
            const giocatore = await Giocatore.findById(squadra.giocatori[index]);
            if (giocatore !== null) {
                arrayDiGiocatori.push(giocatore);
            } else {
                await Squadra.findByIdAndUpdate(squadra._id, {$pull: {giocatori: squadra.giocatori[index]}});
            }
        }
    }
    const newsquadra : SquadraType = {
        ...squadra._doc,
        giocatori: arrayDiGiocatori
    }
    return newsquadra;
};

export {getSquadre};
export {getSquadra};