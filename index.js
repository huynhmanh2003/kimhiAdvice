const express = require("express");
const PORT = 4000;
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken")
app.use(cors());
app.listen(PORT, () => console.log(`listening on ${PORT} `));
const data = [
  { name: "132133", age: 98 },
  { name: "1a123", age: 18 },
  { name: "1a23", age: 18 },
  { name: "12d3", age: 18 },
  { name: "12f3", age: 18 },
];
app.get("/blogs", (req, res) => {
    const token = jwt.sign({userId: 15}, "dasdgasdfadfagdfhafdhfdfagdfas")
  return res.json({ token });
});
