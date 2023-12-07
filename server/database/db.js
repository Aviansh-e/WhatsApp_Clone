import mongoose from 'mongoose';

const url = "mongodb://localhost:27017";
const Mongoose = async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(' MongoDB Connected Successfully!');
    } catch (err) {
        console.log("Error connecting to the database:", err.message);
    }
}

export default Mongoose;
