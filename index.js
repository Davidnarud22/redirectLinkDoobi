const express = require('express');
const app = express();

app.get('/share', (req, res) => {
  const { type, id } = req.query;

  if (!type || !id) {
    return res.status(400).send('Missing type or id');
  }

  const deepLink = `intent://import?id=${id}&type=${type}#Intent;scheme=doobi;package=com.doobilist;end`;
  const fallbackLink = 'https://example.com/no-play-store'; // optional

  res.send(`
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Opening DoobiList...</title>
        <script>
          setTimeout(function() {
            window.location = "${fallbackLink}";
          }, 1500);
        </script>
      </head>
      <body style="background-color:black; color:white; text-align:center; padding-top:50px;">
        <h2>Opening your list...</h2>
        <a href="${deepLink}">Click here if it doesn't open automatically</a>
        <script>
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
