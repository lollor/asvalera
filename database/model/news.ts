import { Schema, model, models } from "mongoose";

const newsSchema = new Schema({
	titolo: {
		type: String,
		required: true,
	},
	sottotitolo: {
		type: String,
		required: false,
	},
	testo: {
		type: String,
		required: true,
	},
	linkImmagine: {
		type: String,
		required: true,
	},
	data: {
		type: String,
		required: true,
	},
	autore: {
		type: String,
		required: true,
	},
});

const NewsSchema = models.news || model("news", newsSchema);
export default NewsSchema;