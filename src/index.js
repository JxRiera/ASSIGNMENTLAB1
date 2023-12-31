const express = require("express");
const app = express();

app.set("view engine", "ejs");

//Line of code found on StackOverflow (Had some problems with linking CSS File)
app.use(express.static('public'));

/* GET for the pages */
app.get('/', (req, res) => {
    res.render("index", {
        title: "Main page",
    });
});

app.get('/aboutme', (req, res) => {
    res.render("about", {
        title: "About me",
    });
});

app.get('/contactme', (req, res) => {
    res.render("contact", {
        title: "Contact me",
    });
});

app.get('/projects', (req, res) => {
    res.render("projects", {
        title: "My projects",
    });
});

app.get('/services', (req, res) => {
    res.render("services", {
        title: "My services",
    });
});

// Port listener, also log in the console so I know its working 
app.listen("3000", () => {
    console.log("TURNED ON SUCCESSFULLY");
});