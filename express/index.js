const express = require("express");
const path = require("path");
const app = new express();
const PORT =  process.env.PORT || 8080 ;
const newspk = require("newspk");

app.get("/api", async (req, res) => {
    

    let limit = req.query.limit || 5;       
    let lang = req.query.lang || "english";    

    let news = await newspk.news(limit, lang);
    res.json(news);         // An array of object with properties "title", "thumbnail", "body", "created_at", "unique id"

})
 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/view/index.html"));
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "/view/404.html"));
})

app.listen(PORT, () => console.log("Server is listening to port : ", PORT));