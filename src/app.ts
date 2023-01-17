import "dotenv/config";
import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan("dev"));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use("/", router);
app.use("/uploads", express.static(path.resolve('uploads')))
db().then(() => console.log("Database connected"));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
