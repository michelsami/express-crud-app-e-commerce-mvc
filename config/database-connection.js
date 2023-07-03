
import mongoose from "mongoose";


export const databaseConnection = async()=>{
	try {
		const client = await mongoose.connect(process.env.DB_URI);
		console.log(`database connected ${client.connection.host}`)
	} catch (error) {
		console.log(`databaseConnection : database-Connection.js/config - error : ${error} `)
	}
}