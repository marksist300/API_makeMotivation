const express = require('express');
const router = express.Router();
const { getQuotes, postQuote, updateQuote, deleteQuote } = require('../controllers/controllers');


router.get("/", getQuotes);
router.post("/motivate", postQuote);
router.put("/update", updateQuote);
router.delete("/delete", deleteQuote);

module.exports = router;