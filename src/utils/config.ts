import dotenv from 'dotenv';

dotenv.config();

export interface Config {
  port: number;
  nodeEnv: string;
  userDetails: {
    fullName: string;
    birthDate: string;
    email: string;
    rollNumber: string;
  };
  cors: {
    origin: string[];
    credentials: boolean;
  };
  rateLimit: {
    windowMs: number;
    max: number;
  };
}

const config: Config = {
  port: parseInt(process.env.PORT || '8000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  userDetails: {
    fullName: process.env.USER_FULL_NAME || 'john_doe',
    birthDate: process.env.USER_BIRTH_DATE || '17091999',
    email: process.env.USER_EMAIL || 'john@xyz.com',
    rollNumber: process.env.USER_ROLL_NUMBER || 'ABCD123',
  },
  cors: {
    origin: process.env.CORS_ORIGIN?.split(',') || [
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'https://localhost:3000',
      '*'
    ],
    credentials: true,
  },
  rateLimit: {
    windowMs: 15 * 60 * 1000, 
    max: 100, 
  },
};

export default config;
