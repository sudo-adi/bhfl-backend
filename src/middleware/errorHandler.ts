import { Request, Response, NextFunction } from 'express';
import { ErrorResponse } from '../models/types';

export interface CustomError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error('Error:', err);

  const statusCode = err.statusCode || 500;
  const isOperational = err.isOperational || false;

  const errorResponse: ErrorResponse = {
    is_success: false,
    error: isOperational ? 'operational_error' : 'internal_server_error',
    message: isOperational ? err.message : 'An unexpected error occurred',
    timestamp: new Date().toISOString(),
  };

  res.status(statusCode).json(errorResponse);
};

export const notFoundHandler = (req: Request, res: Response): void => {
  const errorResponse: ErrorResponse = {
    is_success: false,
    error: 'not_found',
    message: `Route ${req.originalUrl} not found`,
    timestamp: new Date().toISOString(),
  };

  res.status(404).json(errorResponse);
};
