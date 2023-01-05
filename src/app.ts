import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/", router);
db().then(() => console.log("Database connected"));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
