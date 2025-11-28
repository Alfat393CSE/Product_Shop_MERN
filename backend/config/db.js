import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb+srv://alfattasnimhasan_db_user:IiKrxNi4gCuDWKI4@cluster0.x0rf0xr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1); // process code 1 code means exit with failure, 0 means success
	}
};

