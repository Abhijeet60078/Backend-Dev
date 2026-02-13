// server.js

import express from "express";
import bookRoutes from "./router/bookRoutes.js";

const app = express();

app.use(express.json());

app.use("/books", bookRoutes);


app.get("/", (req, res) => {
  res.send("Server is running...");
});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
