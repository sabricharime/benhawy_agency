import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(`
        PATH: ${req.path}
        Error: err.message
        `);

  res.status(500).send({
    statusCode: 500,
    statusMessage: "fail",
    error: err.message,
  });
};
