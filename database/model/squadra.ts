import { Schema, models, model } from "mongoose";

const squadraSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    nomeLink: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    campionato: {
        type: String,
        required: true,
    },
    girone: {
        type: String,
        required: true,
    },
    linkGirone: {
        type: String,
        required: true,
    },
    linkImmagine: {
        type: String,
        required: false,
    },
    anno: {
        type: String,
        required: true,
    },
    giocatori: {
        type: [String],
        required: false,
    },
    immagineSquadra: {
        type: String,
        required: false,
    },
    responsabile: {
        type: String,
        required: true,
    },
    partita: {
        type: String,
        required: true,
    },
    allenamenti: {
        type: String,
        required: true,
    }
});

const SquadraSchema = models.squadra || model("squadra", squadraSchema);
export default SquadraSchema;