import { DataSource } from "typeorm";
import { Prancha } from "../models/pranchaModel";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "dpg-ct6cn8popnds73deuam0-a",
  port: 5432,
  username: "back_postgree_sql_user",
  password: "hg43QcRvJgJxi0tz5Peso2n8vTBhK3hf",
  database: "back_postgree_sql",
  synchronize: true, 
  logging: true,
  entities: [Prancha],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
