import type { Express, Request, Response } from "express";

export function setupEnv(app: Express) {
  if (process.env.NODE_ENV === "production") {
    app.get("/", (req: Request, res: Response) => {
      const { path } = req;
      res.send("Production " + path);
    });
  } else {
    app.get("/", (req: Request, res: Response) => {
      const { path } = req;
      res.send("Development " + path);
    });
  }
}
