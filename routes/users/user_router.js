const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'user router ...'})
});

module.exports = router;