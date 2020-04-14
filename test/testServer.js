const path = require("path");
const express = require("express");
const app = express();

// app.get("/", (req, res) => res.send("../dist/app.html"));
app.use(express.static(path.join(__dirname, "../dist")));
app.listen(8080, "0.0.0.0");
console.log("app listening on port 8080");