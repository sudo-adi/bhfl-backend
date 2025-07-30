import app from './app';
import config from './utils/config';

const server = app.listen(config.port, () => {
  console.log(`🚀 BFHL API server running on port ${config.port}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  server.close(() => {
    process.exit(0);
  });
});
