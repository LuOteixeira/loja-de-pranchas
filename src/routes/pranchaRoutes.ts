import { Router } from "express";
import { PranchaController } from "../controllers/pranchaController";

const router = Router();
const pranchaController = new PranchaController();

router.get("/pranchas", pranchaController.getPranchas.bind(pranchaController));
router.post("/pranchas", pranchaController.addPrancha.bind(pranchaController));

export default router;

