import { Repository } from "typeorm";
import AppDataSource from "../database/connection";
import { Prancha } from "../models/pranchaModel";

export class PranchaRepository {
  private repository: Repository<Prancha>;

  constructor() {
    this.repository = AppDataSource.getRepository(Prancha);
  }

  async findAll(): Promise<Prancha[]> {
    return await this.repository.find();
  }

  async save(prancha: Prancha): Promise<Prancha> {
    return await this.repository.save(prancha);
  }
}

