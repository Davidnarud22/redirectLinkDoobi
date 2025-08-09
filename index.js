const express = require('express');

const app = express();

app.get("/share", (req, res) => {
  const { id, type } = req.query;

  if (!id || !type) {
    return res.status(400).send("Missing id or type parameter");
  }

  // Android intent deep link
  const intentLink = `intent://import?id=${id}&type=${type}#Intent;scheme=doobi;package=com.doobilist;end`;

  res.redirect(intentLink);
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
