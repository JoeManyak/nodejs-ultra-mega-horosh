const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.redirect("http://localhost:3000/book/get")
})

module.exports = router