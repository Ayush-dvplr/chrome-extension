const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  console.log("Received text:", req.body.text);
  if (req.body.text === "Hi, I am Himalaya Raj!") {
    res.json({ message: "Hello" });
  } else {
    res.json({ message: "no hello" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
