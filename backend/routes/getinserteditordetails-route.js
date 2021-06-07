const express=require('express');
const router=express.Router();
let {EditorDetails}= require('../models/inserteditordetails-model');

router.route('/').get(function(req,res){
    EditorDetails.find(function(err,editorDetails){
        if(err)
         console.log(err);
        else{
            res.json(editorDetails);
        } 
    });
});


//delete
router.route('/delete/:id').post(function (req, res) {
    EditorDetails.deleteOne({ _id: req.params.id }, function (err, editorDetails) {
      if (err) res.json(err);
      else res.json('successfully removed');
    });
  });
  
module.exports = router;