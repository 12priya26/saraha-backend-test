import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./Database/connection.js";
import appRouter from "./src/app.router.js";
import cors from "cors";

dotenv.config(); // <-- IMPORTANT

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();

appRouter(app, express);

app.listen(port, () => {
  console.log(`✅ App running on http://localhost:${port}`);
});