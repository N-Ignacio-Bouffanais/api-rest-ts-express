import { Request, Response } from "express";
import {
  updateElectronic,
  getElectronic,
  getElectronics,
  deleteElectronic,
  insertElectronic,
} from "../services/electronic";
import { handlehttp } from "../utils/error.handler";

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getElectronic(id);
    const data = response ? response : "NOT FOUND";
    res.send(response);
  } catch (e) {
    handlehttp(res, "ERROR_GET_Electronic");
  }
};
const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getElectronics();
    res.send(response);
  } catch (e) {
    handlehttp(res, "ERROR_GET_Electronics");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const id = params.id;
    const response = await updateElectronic(id, body);
    return res.send(response);
  } catch (e) {
    handlehttp(res, "ERROR_UPDATE_Electronic");
  }
};
const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseElectronic = await insertElectronic(body);
    res.send(responseElectronic);
  } catch (e) {
    handlehttp(res, "ERROR_CREATE_Electronic", e);
  }
};
const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteElectronic(id);
    res.send(response);
  } catch (e) {
    handlehttp(res, "ERROR_DELETE_Electronic");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
