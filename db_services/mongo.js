import mongoose from "mongoose";

export async function dbConnect() {
    try {
        const conLink = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
        return conLink;
    } catch (e) {
        console.log(e.message);
    }
}