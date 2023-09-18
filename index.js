const path = require("path");
const express = require("express");
const app = express();

// PORT
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Testing website");
})

app.listen(PORT, () => console.log(`Server launched at port ${PORT}`));


