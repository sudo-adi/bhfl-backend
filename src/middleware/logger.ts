import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import config from '../utils/config';


const morganFormat = config.nodeEnv === 'production' 
  ? 'combined' 
  : ':method :url :status :response-time ms - :res[content-length]';

export const requestLogger = morgan(morganFormat);

export const customLogger = (req: Request, res: Response, next: NextFunction): void => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`);
  });
  
  next();
};
