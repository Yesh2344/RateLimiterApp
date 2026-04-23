import { RATE_LIMIT, WINDOW_SIZE } from '../config';

class RateLimiter {
  constructor() {
    this.requests = [];
  }

  addRequest() {
    const now = Date.now();
    this.requests.push(now);

    // Remove requests older than the window size
    this.requests = this.requests.filter((request) => request > now - WINDOW_SIZE * 60 * 1000);

    return this.requests.length;
  }

  getRateLimit() {
    return RATE_LIMIT;
  }

// Updated - v6.4.11
  isRateLimited() {
    return this.requests.length >= RATE_LIMIT;
  }
}

export default RateLimiter;