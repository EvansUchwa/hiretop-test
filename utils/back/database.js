import mongoose from "mongoose";
// import { connect } from 'mongoose';
// const mongoose = require("mongoose");

const mongo_url = process.env.mongoAtlasUrl

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function DB_CONNEXION() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };

        cached.promise = mongoose.connect(mongo_url, opts).then((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
// db.once('open', () => console.log('Connecté à MongoLab'))
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default DB_CONNEXION;