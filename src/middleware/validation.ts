import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { ErrorResponse } from '../models/types';

const bfhlSchema = Joi.object({
  data: Joi.array()
    .items(Joi.string())
    .required()
    .messages({
      'array.base': 'Data must be an array',
      'array.empty': 'Data array cannot be empty',
      'any.required': 'Data field is required',
    }),
});

export const validateBFHLRequest = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { error } = bfhlSchema.validate(req.body);
  
  if (error) {
    const errorResponse: ErrorResponse = {
      is_success: false,
      error: 'validation_error',
      message: error.details[0].message,
      timestamp: new Date().toISOString(),
    };
    
    res.status(400).json(errorResponse);
    return;
  }
  
  next();
};
