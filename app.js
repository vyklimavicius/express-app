const express = require('express');
const app = express();
// Middlewares
app.use('/home', (req, resp, next) => {
  console.log(`Request URL:  ${req.originalUrl}`);
  console.log(`Request TYPE:  ${req.method}`);
  resp.send('Hello from home!');
  next();
});
// Routes
// app.get('/', (req, res) => {
//   res.status(200);
//   res.send('This is my server');
// });

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
