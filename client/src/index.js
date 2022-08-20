import express from 'express';
import postgresql from 'postgresql';

postgresql();

const app = express();

app.get('/books', async (req, res) => {
  const rows = await process.postgresql.query('SELECT * FROM books');
  res.status(200).send(JSON.stringify(rows));
});

app.listen(3000, () => {
  console.log('App running at http://localhost:3000');
});