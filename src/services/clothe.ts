import { Clothe } from "../interfaces/clothe.interface";
import ClotheModel from "../models/clothe";

const insertClothe = async (clothe: Clothe) => {
  const responseInsert = await ClotheModel.create(clothe);
  return responseInsert;
};
const getClothes = async () => {
  const responseClothe = await ClotheModel.find({});
  return responseClothe;
};

const getClothe = async (id: string) => {
  const clothe = await ClotheModel.findById({ _id: id });
  return clothe;
};
const updateClothe = async (id: string, data: Clothe) => {
  const responseClothe = await ClotheModel.findByIdAndUpdate(
    { _id: id },
    data,
    { new: true }
  );
  return responseClothe;
};
const deleteClothe = async (id: string) => {
  const response = await ClotheModel.findByIdAndDelete({ _id: id });
  return response;
};

export { insertClothe, getClothes, getClothe, updateClothe, deleteClothe };
