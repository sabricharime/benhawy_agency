import cors from "cors";
import express from "express";
import type { Request, Response } from "express";
import "dotenv/config";
import { setupEnv } from "./utils/setupEnv";
import { errorHandler } from "./middlewares/errorHandler";

const PORT: number = Number(process.env.PORT) || 5000;
const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(errorHandler)

setupEnv(app);

app.listen(PORT, () => {
  console.log(`
        Listening On Port ${PORT} ! 
        waiting for changes ...
        
        `);
});
