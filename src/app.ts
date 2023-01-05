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
app.use("/api", router);
db().then(() => console.log("conexion ready"));

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
