const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json(['Vasiliy, Abigail, Aky, Ann, Boly, Calvin'])
});

module.exports = router;
