const express = require('express');
const router = express.Router();

//@route  Get api/auth
//@desc   Test Route
//@access  public
router.get('/', (req, res) => {
    res.send('Auth route')
});

module.export = router;