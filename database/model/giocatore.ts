import {Schema, models, model} from "mongoose";

const giocatoreSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    cognome: {
        type: String,
        required: true,
    },
    ruolo: {
        type: String,
        required: true,
    },
    numero: {
        type: String,
        required: true,
    },
    linkImmagine: {
        type: String,
        required: true,
    },
    dataDiNascita: {
        type: String,
        required: true,
    }
});

const GiocatoreSchema = models.giocatore || model("giocatore", giocatoreSchema);
export default GiocatoreSchema;