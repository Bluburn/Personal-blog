import express from 'express';
import request from 'request';

const app = express();
const PORT = 5173;

app.use('/fontawesome', (req, res) => {
  const url = 'https://use.fontawesome.com/releases/v5.7.1/css/all.css';
  req.pipe(request(url)).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
