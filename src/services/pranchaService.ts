import { PranchaRepository } from "../repositories/pranchaRepository";
import Joi from "joi";
import { Prancha } from "../models/pranchaModel";

const pranchaSchema = Joi.object({
  quantidade: Joi.number().min(1).required(),
  tamanhoEmPes: Joi.number().min(1).required(),
  cor: Joi.string().min(3).required(),
});

export class PranchaService {
  private pranchaRepository: PranchaRepository;

  constructor() {
    this.pranchaRepository = new PranchaRepository();
  }

  async getAllPranchas(): Promise<Prancha[]> {
    return this.pranchaRepository.findAll();
  }

  async createPrancha(data: any): Promise<Prancha> {
    const { error } = pranchaSchema.validate(data);
    if (error) {
      throw new Error(`Invalid data: ${error.details[0].message}`);
    }
    const prancha = new Prancha();
    prancha.quantidade = data.quantidade;
    prancha.tamanhoEmPes = data.tamanhoEmPes;
    prancha.cor = data.cor;

    return await this.pranchaRepository.save(prancha);
  }
}

