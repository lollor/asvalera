const MONGO_URL =
	"mongodb+srv://" +
	process.env.MONGODB_USER +
	":" +
	process.env.MONGODB_PASS +
	"@asvalera.3bpbmot.mongodb.net/?retryWrites=true&w=majority";
import mongoose from "mongoose";

var database: any = null;
async function connectDB() {
	try {
		const { connection } = await mongoose.connect(MONGO_URL);

		if (connection.readyState === 1) {
			console.log(`MongoDB Connected: ${connection.host}`);
		} else {
			console.log(`MongoDB Connection Failed`);
		}
		return connection;
	} catch (err) {
		console.error(err);
		return Promise.reject(err);
	}
}

export default async function getDb() {
	if (!database) {
		database = await connectDB();
	}
	return database;
}
