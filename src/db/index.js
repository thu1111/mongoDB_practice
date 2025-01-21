import mongoose from 'mongoose';

const DB_NAME = "standard-express";

export const connectDB = async () => {
    try {
        const connectionResponse = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("DB connceted successfully", connectionResponse.connection.host);
        
        // console.log(`Connected to the ${DB_NAME} database`);
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); 
    }
    };