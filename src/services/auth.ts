import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handler";
import { generateToken } from "../utils/jwt.handler";

const registerNewUser = async ({ email, password, name }: User) => {
  const user = await UserModel.findOne({ email });
  if (user) return "Already_USER";
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const user = await UserModel.findOne({ email });
  if (!user) return "Not_Found_USER";

  const passwordHash = user.password;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "INCORRECT_PASSWORD";

  const token = generateToken(user.email);
  const data = {
    token,
    user
  };
  return data;
};

export { registerNewUser, loginUser };
