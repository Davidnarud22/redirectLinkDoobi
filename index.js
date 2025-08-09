const express = require('express');
const app = express();

app.get('/share', (req, res) => {
  const { deepLink } = req.query;

  if (!deepLink) {
    return res.status(400).send('Missing deepLink parameter');
  }

  res.redirect(deepLink);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Redirect server running on port ${PORT}`);
});
