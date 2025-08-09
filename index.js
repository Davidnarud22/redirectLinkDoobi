app.get('/share', (req, res) => {
  const { type, id } = req.query;

  if (!type || !id) {
    return res.status(400).send('Missing type or id');
  }

  const deepLink = `intent://import?id=${id}&type=${type}#Intent;scheme=doobi;package=com.doobilist;end`;

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
          window.location = "${deepLink}";
        </script>
      </body>
    </html>
  `);
});
