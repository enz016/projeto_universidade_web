const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/calendario.html")); // vai renderizar calendario.ejs, calendario.html, etc
});

module.exports = router;
