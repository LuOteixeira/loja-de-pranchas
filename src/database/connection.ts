import { DataSource } from "typeorm";
import { Prancha } from "../models/pranchaModel";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "host-do-seu-banco-de-dados",
  port: 5432,
  username: "seu-usuario",
  password: "sua-senha",
  database: "nome-do-banco",
  synchronize: true, // Para desenvolvimento, cria as tabelas automaticamente
  logging: true,
  entities: [Prancha],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
