const MONGO_URL =
	"mongodb+srv://" +
	process.env.MONGODB_USER +
	":" +
	process.env.MONGODB_PASS +
	"@asvalera.3bpbmot.mongodb.net/?retryWrites=true&w=majority";
import mongoose from "mongoose";

var database: mongoose.Connection | undefined;

var databaseConnesso = false;

async function connectDB() {
	try {
		const { connection } = await mongoose.connect(MONGO_URL);

		if (connection.readyState === 1) {
			databaseConnesso = true;
			console.log(`MongoDB Connected: ${connection.host}`);
		} else {
			console.log(`MongoDB Connection Failed`);
		}
		return connection;
	} catch (err) {
		console.error(err);
		return undefined;
	}
}

export default async function getDb() {
	console.log("databaseConnesso: " + databaseConnesso);
	/* if (database === undefined || !database) {
		database = await connectDB();
	} */
	if (!databaseConnesso) {
		database = await connectDB();
		databaseConnesso = true;
	}
	return database;
}
