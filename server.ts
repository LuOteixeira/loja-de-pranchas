import express, { Request, Response } from "express";
import AppDataSource from "./database/connection";
import pranchaRoutes from "./routes/pranchaRoutes";

const app = express();
app.use(express.json());

app.use("/api", pranchaRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Bem-vindo à loja de pranchas!");
});

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  })
  .catch((error) => console.log(error));
