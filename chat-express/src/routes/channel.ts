import express from "express";
import ChannelController from "../controllers/channelControler";

const router = express.Router();

router.post("/", ChannelController.create);
router.get("/", ChannelController.findAll);
router.get("/:id", ChannelController.findOne);
router.put("/:id", ChannelController.update);
router.delete("/:id", ChannelController.destroy);

export default router;
