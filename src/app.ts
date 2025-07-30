import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import config from './utils/config';
import routes from './routes';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import { requestLogger, customLogger } from './middleware/logger';

const app = express();

app.set('trust proxy', 1);

app.use(helmet());

app.use(cors({
  origin: '*',
  credentials: config.cors.credentials,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}));

app.use(compression());

const limiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  message: {
    is_success: false,
    error: 'rate_limit_exceeded',
    message: 'Too many requests from this IP, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// app.use(limiter);

if (config.nodeEnv === 'production') {
  app.use(requestLogger);
} else {
  app.use(customLogger);
}

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/', routes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
