/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiError } from "@/helpers/api-erros"
import { NextFunction, Request, Response } from "express"
export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500
  const message = error.statusCode ? error.message : "Internal Server Error"
  return res.status(statusCode).json({
    message: message,
  })
}
