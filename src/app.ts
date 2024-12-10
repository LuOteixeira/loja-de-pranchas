import express from "express";
import pranchaRoutes from "./routes/pranchaRoutes";

const app = express();

app.use(express.json());

app.use("/api", pranchaRoutes);

export default app;
