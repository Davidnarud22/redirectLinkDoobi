const express = require('express');

const app = express();

app.get("/share", (req, res) => {
  const { id, type } = req.query;

  console.log("Incoming request to /share");
  console.log("Query params:", { id, type });

  if (!id || !type) {
    console.log("❌ Missing parameters");
    return res.status(400).send("Missing id or type parameter");
  }

  // Android intent deep link
  const intentLink = `intent://import?id=${id}&type=${type}#Intent;scheme=doobi;package=com.doobilist;end`;

  console.log("Redirecting to:", intentLink);

  res.redirect(intentLink);
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
