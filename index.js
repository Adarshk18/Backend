const express = require("express");
const path = require("path");

const app = express();
const fs = require("fs");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    res.render("index", { files: files });
  });
});

app.get("/edit/:filename", (req, res) => {
  res.render('edit', { filename: req.params.filename });
});

app.post("/edit", (req, res) => {
  fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, (err) => {
    res.redirect("/");
  })
})

app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    (error) => {
      res.redirect("/");
    }
  );
});

app.get('/file/:filename', (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    res.render('show', { filename: req.params.filename, filedata: filedata });
  })
})

app.listen(4000);
