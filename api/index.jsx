const express = require("express")
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected to MongoDbB"))
    .catch((err=cl) => console.log(err));

    app.use("/api/auth", authRoute)

app.listen("5000", () => {
    console.log("Backend is running");
});