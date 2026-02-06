const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
        const time = Date.now() - start;
        console.log(`${req.method} ${req.url} - ${time}ms`);
    });
    next();
});
const users = [
    { name: "Abhi" },
    { name: "Rohit" },
    { name: "Aman" },
    { name: "Ankit" }
];

app.get("/users", (req, res) => {
    const { name } = req.query;

    const filteredUsers = name
        ? users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()))
        : users;

    res.json(filteredUsers);
});
app.get("/contact", (req, res) => {
    res.render("contact");
});

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    res.send(`Thanks ${name}, we received your message!`);
});
app.get("/gallery", (req, res) => {
    const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
    res.render("gallery", { images });
});
let posts = [
    { id: 1, title: "First Post", content: "Hello Blog!" }
];
app.get("/blog", (req, res) => {
    res.render("blog", { posts });
});
app.get("/blog/:id", (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.render("post", { post });
});
app.get("/new-post", (req, res) => {
    res.render("new-post");
});
app.post("/new-post", (req, res) => {
    const { title, content } = req.body;
    posts.push({ id: posts.length + 1, title, content });
    res.redirect("/blog");
});
app.use((req, res) => {
    res.status(404).render("404");
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
