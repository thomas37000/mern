const mongoose = require("mongoose");
const mp = process.env.MP;
const user = process.env.USER;

mongoose
  .connect(`mongodb+srv://${user}:${mp}@cluster0.nidnr.mongodb.net/mern`)
  .then(() => console.log("Connected to MongoDb"))
  .catch((error) => console.log("Failed to connect to MongoDb !", error));
