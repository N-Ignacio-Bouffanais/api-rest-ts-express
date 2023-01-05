import { Electronic } from "../interfaces/electronic.interface";
import ElectronicModel from "../models/electronic";

const insertElectronic = async (Electronic: Electronic) => {
  const responseInsert = await ElectronicModel.create(Electronic);
  return responseInsert;
};
const getElectronics = async () => {
  const responseElectronic = await ElectronicModel.find({});
  return responseElectronic;
};

const getElectronic = async (id: string) => {
  const Electronic = await ElectronicModel.findById({ _id: id });
  return Electronic;
};
const updateElectronic = async (id: string, data: Electronic) => {
  const responseElectronic = await ElectronicModel.findByIdAndUpdate(
    { _id: id },
    data,
    { new: true }
  );
  return responseElectronic;
};
const deleteElectronic = async (id: string) => {
  const response = await ElectronicModel.findByIdAndDelete({ _id: id });
  return response;
};

export { insertElectronic, getElectronics, getElectronic, updateElectronic, deleteElectronic };