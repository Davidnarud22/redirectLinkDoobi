const express = require('express');
const app = express();

app.get('/share', (req, res) => {
  const { type, id } = req.query;

  if (!type || !id) {
    return res.status(400).send('Missing type or id');
  }

  // Build the intent URI from the clean params
  const deepLink = `intent://import?id=${id}&type=${type}#Intent;scheme=doobi;package=com.doobilist;end`;

  // Send HTML that only tries to open the app
  res.send(`
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Opening DoobiList...</title>
      </head>
      <body style="background-color:black; color:white; text-align:center; padding-top:50px;">
        <h2>Opening your list...</h2>
        <a href="${deepLink}">Click here if it doesn't open automatically</a>
        <script>
          // Try to open the app
          window.location = "${deepLink}";
        </script>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Redirect server running on port ${PORT}`);
});
