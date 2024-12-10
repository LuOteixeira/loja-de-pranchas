import { Request, Response } from "express";
import { PranchaService } from "../services/pranchaService";

export class PranchaController {
  private pranchaService: PranchaService;

  constructor() {
    this.pranchaService = new PranchaService();
  }

  async getPranchas(req: Request, res: Response) {
    try {
      const pranchas = await this.pranchaService.getAllPranchas();
      res.json(pranchas);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async addPrancha(req: Request, res: Response) {
    try {
      const prancha = await this.pranchaService.createPrancha(req.body);
      res.status(201).json(prancha);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

