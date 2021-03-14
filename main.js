const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    console.log("Get on root");
    res.sendFile("./public/index.html");
})



app.listen(8000);
console.log("Listening on port 8000");

