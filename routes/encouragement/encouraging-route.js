const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'encouragements here ...'})
});

module.exports = router;