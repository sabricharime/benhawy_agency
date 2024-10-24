import type { Request, Response, NextFunction } from "express";

type MainController = (
  request: Request,
  response: Response,
  next: NextFunction
) => Promise<any>;

export const mainController = (controller: MainController): MainController => {
  return async (req, res, next) => {
    try {
      controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
