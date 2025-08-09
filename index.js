import express from 'express';

const app = express();

app.get("/share", (req, res) => {
  const { id, type } = req.query;
  res.redirect(`doobi://import?id=${id}&type=${type}`);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
