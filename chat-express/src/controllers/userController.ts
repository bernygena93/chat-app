import { Request, Response } from "express";
import logger from "../utils/logger";
import UserModel from "../models/user";

class UserController {
  static async signUp(req: Request, res: Response): Promise<Response> {
    try {
      const { username, email, password } = req.body;
      const user = await UserModel.findOne({
        where: { email },
      });
      if (!user) {
        await UserModel.create({
          username,
          email,
          password,
        });
        return res.status(201).json({ message: "created new user" });
      }
      return res.status(400).json({ error: "el email ingresado ya existe" });
    } catch (err) {
      logger.error(err);
      return res.status(400).json({ error: err });
    }
  }

  static async signIn(req: Request, res: Response): Promise<Response> {
    try {
      const { email } = req.body;
      const user = await UserModel.findOne({
        where: { email },
      });
      if (user) {
        return res.status(200).json({
          user: {
            user,
          },
        });
      }
      return res.status(204).json({ message: "unregistered email" });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}

export default UserController;
