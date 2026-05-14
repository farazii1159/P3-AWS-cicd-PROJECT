const express = require("express");
const app = express();

// IMPORTANT: AWS gives PORT dynamically
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("AWS CI/CD Pipeline Working 🚀");
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});