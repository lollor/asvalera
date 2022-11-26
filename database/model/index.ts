import getDb from "../connection";
import SquadraSchema from "./squadra";
import GiocatoreSchema from "./giocatore";
import { Squadra, Response, Giocatore } from "../../typings";

const getSquadre = async () => {
    await getDb();
    const squadre = await SquadraSchema.find();
    var nuoveSquadre = [];
    for (let index = 0; index < squadre.length; index++) {
        const idGiocatori = squadre[index].giocatori;
        var arrayDiGiocatori = [];
        for (let yndex = 0; yndex < idGiocatori.length; yndex++) {
            const idGiocatore = idGiocatori[yndex];
            const giocatore = await GiocatoreSchema.findById(idGiocatore);
            if (giocatore) {
                arrayDiGiocatori.push(giocatore);
            }
        }
        nuoveSquadre.push({
            ...squadre[index]._doc,
            giocatori: arrayDiGiocatori
        });
    }
    return nuoveSquadre as Squadra[];
};

const getSquadra = async (nomeOrId: string) => {
    await getDb();
    let squadra;
    try {
        squadra = await SquadraSchema.findOne({nomeLink: nomeOrId}) || await SquadraSchema.findById(nomeOrId);
    } catch (error) {
        return undefined;
    }
    if (!squadra) {
        return undefined;
    }
    var arrayDiGiocatori = [];
    if (squadra.giocatori) {
        for (let index = 0; index < squadra.giocatori.length; index++) {
            const giocatore = await GiocatoreSchema.findById(squadra.giocatori[index]);
            if (giocatore !== null) {
                arrayDiGiocatori.push(giocatore);
            } else {
                await SquadraSchema.findByIdAndUpdate(squadra._id, {$pull: {giocatori: squadra.giocatori[index]}});
            }
        }
    }
    return {
        ...squadra._doc,
        giocatori: arrayDiGiocatori
    } as Squadra;
};

const createSquadra = async (squadra: Squadra) => {
    await getDb();
    try {
        await SquadraSchema.create(squadra);
    } catch (error) {
        if (error) {
            return {
                status: false,
                message: "Errore durante la creazione della squadra",
                result: error
            } as Response;
        }
    }
    return {
        status: true,
        message: "Squadra creata con successo",
        result: null
    } as Response;
};

const updateSquadra = async (idSquadra:string, squadra: Squadra) => {
    await getDb();
    try {
        await SquadraSchema.findByIdAndUpdate(idSquadra, squadra);        
    } catch (error) {
        return {
            status: false,
            message: "Errore durante l'aggiornamento della squadra",
            result: error
        } as Response;
    }
    return {
        status: true,
        message: "Squadra aggiornata con successo",
        result: null
    } as Response;
};

const deleteSquadra = async (idSquadra:string) => {
    await getDb();
    try {
        await SquadraSchema.findByIdAndDelete(idSquadra);
    } catch (error) {
        return {
            status: false,
            message: "Errore durante l'eliminazione della squadra",
            result: error
        } as Response;   
    }
    return {
        status: true,
        message: "Squadra eliminata con successo",
        result: null
    } as Response;
};

export {getSquadre};
export {getSquadra};
export {createSquadra};
export {updateSquadra};
export {deleteSquadra};

//parte giocatore

const getGiocatore = async (idGiocatore: string) => {
    await getDb();
    try {
        const giocatore = await GiocatoreSchema.findById(idGiocatore);
        if (!giocatore) {
            return undefined;
        }
        return giocatore as Giocatore;
    } catch (error) {
        return undefined;
    }
};

const createGiocatore = async (idSquadra : string, giocatore: Giocatore) => {
    await getDb();
    let result;
    try {
        result = await GiocatoreSchema.create(giocatore);
    } catch (error) {
        return {
            status: false,
            message: "Errore durante la creazione del giocatore",
            result: error
        } as Response;
    }
    try {
        await SquadraSchema.findByIdAndUpdate(idSquadra, {$push: {giocatori: result._id}});
    } catch (error) {
        return {
            status: false,
            message: "Errore durante l'aggiornamento della squadra",
            result: error
        } as Response;
    }
    return {
        status: true,
        message: "Giocatore creato con successo",
        result: null
    } as Response;
};

const updateGiocatore = async (idGiocatore: string, giocatore: Giocatore) => {
    await getDb(); 
    try {
        await GiocatoreSchema.findByIdAndUpdate(idGiocatore, giocatore);
    } catch (error) {
        return {
            status: false,
            message: "Errore durante l'aggiornamento del giocatore",
            result: error
        } as Response;
    }
    return {
        status: true,
        message: "Giocatore aggiornato con successo",
        result: null
    } as Response;
};

const deleteGiocatore = async (idGiocatore: string) => {
    await getDb();
    try {
        await GiocatoreSchema.findByIdAndDelete(idGiocatore);
    } catch (error) {
        return {
            status: false,
            message: "Errore durante l'eliminazione del giocatore",
            result: error
        } as Response;
    }
    return {
        status: true,
        message: "Giocatore eliminato con successo",
        result: null
    } as Response;
};

export {getGiocatore};
export {createGiocatore};
export {updateGiocatore};
export {deleteGiocatore};