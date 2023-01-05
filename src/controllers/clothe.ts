import { Request, Response } from "express";
import {
  insertClothe,
  getClothes,
  getClothe,
  updateClothe,
  deleteClothe,
} from "../services/clothe";
import { handlehttp } from "../utils/error.handler";

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getClothe(id);
    res.send(response);
  } catch (e) {
    handlehttp(res, "ERROR_GET_Clothe");
  }
};
const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getClothes();
    res.send(response);
  } catch (e) {
    handlehttp(res, "ERROR_GET_Clothes");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const id = params.id;
    const response = await updateClothe(id, body);
    return res.send(response);
  } catch (e) {
    handlehttp(res, "ERROR_UPDATE_Clothe");
  }
};
const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseClothe = await insertClothe(body);
    res.send(responseClothe);
  } catch (e) {
    handlehttp(res, "ERROR_CREATE_Clothe", e);
  }
};
const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteClothe(id);
    res.send(response);
  } catch (e) {
    handlehttp(res, "ERROR_DELETE_Clothe");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };