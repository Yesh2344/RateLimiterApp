import express from 'express';
import RateLimiter from './utils/rateLimiter';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
const rateLimiter = new RateLimiter();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/api/rate', (req, res) => {
  res.json({ rate: rateLimiter.getRateLimit() });
});

app.post('/api/rate', (req, res) => {
  rateLimiter.addRequest();
  res.json({ rate: rateLimiter.getRateLimit() });
});

app.get('/api/requests', (req, res) => {
  res.json({ requests: rateLimiter.requests });
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});