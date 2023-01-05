import { Router } from "express";
import {
  deleteElectronic,
  getElectronic,
  getElectronics,
  postElectronic,
  updateElectronic,
} from "../controllers/electronic";

const router = Router();

router.get("/", getElectronics),
  router.get("/:id", getElectronic),
  router.get("/", postElectronic),
  router.get("/:id", updateElectronic),
  router.delete("/:id", deleteElectronic);

export { router };
