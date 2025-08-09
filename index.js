import express from 'express';

const app = express();

// Redirect handler
app.get("/share", (req, res) => {
  const { id, type } = req.query;

  if (!id || !type) {
    return res.status(400).send("Missing id or type parameter");
  }

  // Redirect to your app's deep link
  const deepLink = `doobi://import?id=${id}&type=${type}`;
  res.redirect(deepLink);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
