import express from 'express';
const app = express();
app.get('/', (_req, res) => { res.json({ ok: true, message: 'Hello GitHub Actions!' }); });
app.listen(3000, () => console.log('API running'));
export default app;

__tests__/api.test.js:
import request from 'supertest';
import app from '../index.js';

describe('GET /', () => { it('returns ok:true', async () => { const res = await request(app).get('/'); expect(res.statusCode).toBe(200); expect(res.body.ok).toBe(true); }); });

