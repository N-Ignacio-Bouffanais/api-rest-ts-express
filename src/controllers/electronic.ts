import { Request, Response } from "express";
import { handlehttp } from "../utils/error.handler";

const getElectronic = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handlehttp(res, "ERROR_GET_DEVICE");
  }
};
const getElectronics = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handlehttp(res, "ERROR_GET_DEVICES");
  }
};

const updateElectronic = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handlehttp(res, "ERROR_UPDATE_DEVICE");
  }
};
const postElectronic = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handlehttp(res, "ERROR_CREATE_DEVICE");
  }
};
const deleteElectronic = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handlehttp(res, "ERROR_DELETE_DEVICE");
  }
};

export {
  getElectronic,
  getElectronics,
  updateElectronic,
  postElectronic,
  deleteElectronic,
};
