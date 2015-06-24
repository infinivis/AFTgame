var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Image = mongoose.model('Image');
  
  
  module.exports = function (app) {
  app.use('/api/images', router);
};

  
router.route("/")
        .get(function(req, res, next){
     Image.find(function (err, images) {
    if (err) return next(err);
    console.log("dans /images");
    return res.status(202).json(images);
    });
  })
 



        .post(function(req, res, next){
            //à check les no d'erreur
             if(!req.body.dataUrl) return res.status(422).json({message: "need dataUrl"});  
             var newImage = new Image();
//             var base64 = new Buffer(req.body.dataUrl,'base64');
//             newImage.data = base64;
//             newImage.contentType = 'image/png'
             newImage.dataUrl = req.body.dataUrl;
             
             var callback = function(err, imageSaved){
                 if(err) return next(err);
                 return res.status(200).json(imageSaved.id);
             }
             newImage.save(callback);
             
});





router.route("/:id")
        .get(function(req, res, next){
              Image.findById(req.params.id, function (err, image) {
    if (err) return next(err);
    console.log("dans /:id");
    return res.status(200).json(image);
  })
})


