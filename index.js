const express = require('express');
const app = express();

app.get('/share', (req, res) => {
  const { type, id } = req.query;

  if (!type || !id) {
    return res.status(400).send('Missing type or id');
  }

  const deepLink = `com.doobilist://share?type=${type}&id=${id}`;
  res.redirect(deepLink);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Redirect server running on port ${PORT}`);
});
