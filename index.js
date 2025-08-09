import express from 'express';

const app = express();

app.get('/share', (req, res) => {
  const { deepLink } = req.query;
  if (!deepLink) {
    return res.status(400).send('Missing deepLink parameter');
  }

  res.redirect(deepLink);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
