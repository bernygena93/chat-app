import { Request, Response } from "express";
import logger from "../utils/logger";
import MessageModel from "../models/message";
import io from "../socket";

class MessageController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const { message, date } = req.body;
      await MessageModel.create({
        message,
        date,
      });
      io.emit("message", message);
      return res.status(201).json({ message: "created new message" });
    } catch (err) {
      logger.error(err);
      return res.status(400).json({ message: "failed to send message" });
    }
  }

  static async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const messages = await MessageModel.findAll();
      if (messages.length > 0) {
        return res.status(200).json(messages);
      }
      return res.status(204).json(messages);
    } catch (err) {
      return res.status(400).json({ message: "failed to read message" });
    }
  }

  static async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const message = await MessageModel.findOne({
        where: { id },
      });
      return res.status(200).json(message);
    } catch (err) {
      logger.error(err);
      return res.status(400).json({ message: "failed to read message" });
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { message, date } = req.body;
      await MessageModel.update({ message, date }, { where: { id } });
      return res.status(200).send();
    } catch (err) {
      return res.status(400).json({ message: "failed update mesagge" });
    }
  }

  static async destroy(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await MessageModel.destroy({ where: { id } });
      return res.status(200).json({ status: "Ok" });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}

export default MessageController;
