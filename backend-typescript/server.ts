import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userController from "./controllers/user.js";
import mongoose from "mongoose";
import authenticationController from "./controllers/authentication.js";
import defineCurrentUser from "./middleware/defineCurrentUser.js";
import countryController from "./controllers/country.js"; // Import the country controller
import { exit } from "process";

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();
const ATLAS_URI = process.env.ATLAS_URI;

// Allow requests from 'http://localhost:3000'
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(defineCurrentUser);

app.use(express.json());
app.use("/user", userController);
app.use("/authentication", authenticationController);
app.use("/country", countryController);

// setup server for frontend deployment
app.use(express.static("./dist"));
app.get("*", (req, res) => {
  return res.sendFile("./dist/index.html");
});

if (!ATLAS_URI) {
  console.log("ATLAS_URI is", ATLAS_URI);
  console.log("Cannot connect to database.");
  exit;
} else {
  mongoose
    .connect(ATLAS_URI)
    .then(() => {
      console.log("successfully connected");
      // start the Express server
      app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
      });
    })
    .catch((e) => {
      console.log(e);
      console.log("not connected");
    });
}
