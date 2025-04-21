const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// HARDCODED secret key
const SECRET_KEY = "hardcoded-1234";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.post("/check", (req, res) => {
  const userKey = req.body.apikey;

  if (userKey === SECRET_KEY) {
    res.send("✅ Access granted with hardcoded key!");
  } else {
    res.send("❌ Invalid key.");
  }
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
