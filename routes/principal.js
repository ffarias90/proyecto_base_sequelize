const { Router } = require('express');
const { Quote } = require('../models/db');
const router = Router();




router.get("/", (req, res) => {
    res.render("index");
});


//para agregar quotes
/*router.post("/quotes", function(req, res) {
    const newquote = req.body;
    //console.log(newquote);
    quotes.push(newquote);
    res.render("quotes", { quotes: quotes });
});*/













module.exports = router;