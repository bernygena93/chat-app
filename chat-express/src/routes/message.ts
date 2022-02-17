import express from "express";
import MessageController from "../controllers/messageController";

const router = express.Router();

router.post("/", MessageController.create);
router.get("/", MessageController.findAll);
router.get("/:id", MessageController.findOne);
router.put("/:id", MessageController.update);
router.delete("/:id", MessageController.destroy);

export default router;
