
const mongoose = require('mongoose')

const connectDb = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "school",
        };

        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("connected successfully")
    } catch (err) {
        console.log(err)
    };
}

module.exports = connectDb;