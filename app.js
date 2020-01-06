const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// Routes
app.get("/", (req, res) => {
  res.status(200);
  res.send("This is my server");
});
