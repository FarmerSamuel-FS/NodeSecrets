const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = 3001;

// Secret from the .env file
const ENV_SECRET = process.env.SECRET_KEY;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.post("/check", (req, res) => {
  const userKey = req.body.apikey;

  if (userKey === ENV_SECRET) {
    res.send("✅ Access granted via shared .env secret!");
  } else {
    res.send("❌ Invalid key.");
  }
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
