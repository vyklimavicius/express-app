const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes.js');
// const open = require('open');

// App Routing Middlewares
app.use('/api/v1/users', userRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
  // console.log(data);
  // open('http://localhost:3000/home');
});
