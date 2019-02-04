const express = require("express");
const router = express.Router();

router.get('/', (req, res) =>{
   res.json({data:"this is a Movie Profile"});
});

module.exports = router