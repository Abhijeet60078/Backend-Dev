import express from "express";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();
import userRoute from "./Router/userRoute.js";
import registerRoute from "./Router/registerRoute.js";
import dashboardRoute from "./Router/Dashbaord.js";

const port = 3000;

const app = express();

app.use(express.json());


app.use("/api", userRoute);
app.use("/auth", registerRoute);
app.use("/dash", dashboardRoute);

app.listen(port, () => {
  console.log("Server is running on port");
});