const express = require("express");
const app = express();

app.set("view engine", "ejs");

//Line of code found on StackOverflow (Had some problems with linking CSS File)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index", {
        title: "Main page",
    });
});

app.get('/aboutme', (req, res) => {
    res.render("views/about");
});

app.get('/contactme', (req, res) => {
    res.render("views/contact");
});

app.get('/projects', (req, res) => {
    res.render("views/projects");
});

app.get('/services', (req, res) => {
    res.render("views/services");
});

app.listen("3000");