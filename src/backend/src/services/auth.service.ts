import { Auth } from "../interface/auth.interface";
import { User } from "../interface/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verified } from "../utils/bcrypt.handle";

const registerUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });

  if (checkIs) {
    return "Already User";
  }

  const passHash = await encrypt(password);
  const registerUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });

  return registerUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });

  if (!checkIs) {
    return "Not found user";
  }

  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) {
    return "Password incorrect";
  };

  return checkIs;
};

export { registerUser, loginUser };
