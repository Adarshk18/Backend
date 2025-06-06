const express = require("express");
const app = express();
const path = require("path");

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname,"public")));

app.get("/", (req, res)=> {
    res.send("hii");
});

app.listen(4000);