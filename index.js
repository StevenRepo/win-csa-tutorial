import express from 'express';
const app = express();
app.get('/', (_req, res) => { 
	res.json({ ok: true, message: 'Hello GitHub Actions!' }); 
});

if (process.env.NODE_ENV !== "test") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`API listening on :${port}`));
}

export default app;
