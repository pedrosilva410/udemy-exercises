import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<p>this is the about section, so yeah good stuff</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>contact: pgds410@gmail.com</h1>");
});
app.listen(port, () => {
  console.log(`server running on port ${port}.`);
});
