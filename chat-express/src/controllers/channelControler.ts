import { Request, Response } from "express";
import logger from "loglevel";
import ChannelModel from "../models/channel";

class ChannelController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const { title, description } = req.body;
      await ChannelModel.create({
        title,
        description,
      });
      return res.status(201).json({ message: "created new channel" });
    } catch (err) {
      logger.error(err);
      return res.status(400).json({ message: "falied to create channel" });
    }
  }

  static async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const channels = await ChannelModel.findAll();
      if (channels.length > 0) {
        return res.status(200).json(channels);
      }
      return res.status(204).json(channels);
    } catch (err) {
      return res.status(400).json({ message: "failed to read channels" });
    }
  }

  static async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const channel = await ChannelModel.findOne({
        where: { id },
      });
      return res.status(200).json(channel);
    } catch (err) {
      logger.error(err);
      return res.status(400).json({ message: "failed to read channel" });
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      await ChannelModel.update({ title, description }, { where: { id } });
      return res.status(200).send();
    } catch (err) {
      return res.status(400).json({ message: "failed update channel" });
    }
  }

  static async destroy(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await ChannelModel.destroy({ where: { id } });
      return res.status(200).json({ status: "Ok" });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}
export default ChannelController;
