const express = require('express');
const router = express.Router();

//@route  Get api/users
//@desc   Test Route
//@access  public
router.get('/', (req, res) => {
    res.send('User route')
});


module.export = router;