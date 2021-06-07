
const express=require('express');
const router=express.Router();
let {Conference}= require('../models/conference-model');

router.route('/').get(function (req, res) {
    Conference.find(function (err, conference) {
      if (err) console.log(err);
      else {
        res.json(conference);
      }
    });
  });
module.exports = router;