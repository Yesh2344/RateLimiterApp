import dotenv from 'dotenv';

dotenv.config();

export const RATE_LIMIT = parseInt(process.env.RATE_LIMIT, 10);
export const WINDOW_SIZE = parseInt(process.env.WINDOW_SIZE, 10);