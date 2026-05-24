import jwt from 'jsonwebtoken';
import { JWTPayload } from '../types';
import { env } from '../config/env';

export const jwtService = {
  generateToken(payload: JWTPayload, expiresIn = '24h') {
    return jwt.sign(payload, env.JWT_SECRET, { expiresIn });
  },

  generateRefreshToken(payload: JWTPayload) {
    return jwt.sign(payload, env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
  },

  verifyToken(token: string): JWTPayload | null {
    try {
      return jwt.verify(token, env.JWT_SECRET) as JWTPayload;
    } catch (error) {
      return null;
    }
  },

  verifyRefreshToken(token: string): JWTPayload | null {
    try {
      return jwt.verify(token, env.JWT_REFRESH_SECRET) as JWTPayload;
    } catch (error) {
      return null;
    }
  },
};
