import express from "express";
import cors from "cors";
import startDB from "./config/db.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const PORT = 3001;

app.use(
  cors({
    origin: "*",
  })
);

startDB();

app.use(express.urlencoded());

const UserSchema = new mongoose.Schema({
  username: String,
  age: Number 
});

const userModel = mongoose.model("users", UserSchema);

app.get("/getUsers", (req, res) => {

  userModel.find({}).then(function(users) {
    res.json(users)
  }).catch(function(err) {
    console.log(err);
  })

});

app.listen(3002, () => {
  console.log(`Server started successfully at port ${PORT}`);
});
