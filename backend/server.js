const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // helps us connect to mongo dbDatabase

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // middleware allows us to parse json
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB databasae connection established succesfully");
});

const excercisesRouter = require("./routes/excercises");
const usersRouter = require("./routes/users");

app.use("/excerises", excercisesRouter);
app.use("./users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
