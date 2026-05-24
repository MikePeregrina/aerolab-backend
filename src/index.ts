import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes';
import schoolsRoutes from './routes/schools.routes';
import adminRoutes from './routes/admin.routes';
import { errorHandler } from './middleware/errorHandler.middleware';
import { env } from './config/env';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/schools', schoolsRoutes);
app.use('/api/admin', adminRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: env.NODE_ENV,
  });
});

// Error handling
app.use(errorHandler);

// Start server
app.listen(env.PORT, () => {
  console.log(`✅ Server running on port ${env.PORT}`);
  console.log(`📡 Health check: http://localhost:${env.PORT}/api/health`);
  console.log(`🌍 Environment: ${env.NODE_ENV}`);
});

export default app;
