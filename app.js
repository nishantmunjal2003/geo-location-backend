import express from "express";
import { config } from "dotenv";

import dbConnect from "./config/dbConnect.js";
import authRoutes from "./routes/auth.js";
import authMiddleWare from "./middleware/auth.js";
import classRoutes from "./routes/class.js";
import courseRoutes from "./routes/course.js";

const app = express();

config();
dbConnect();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "API is working" });
});
app.use("/api", authRoutes);
app.use(authMiddleWare);
app.use("/api", classRoutes);
app.use("/api", courseRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Listening on port ${port}...`));
