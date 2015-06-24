var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Partie = mongoose.model('Partie');
  
  
  module.exports = function (app) {
  app.use('/api/parties', router);
};

  
router.route("/")
        .get(function(req, res, next){
     Partie.find(function (err, parties) {
    if (err) return next(err);
    return res.status(202).json("YO");
    });
  })
 



        .post(function(req, res, next){
            //à check les no d'erreur
             if(!req.body.image) return res.status(422).json({message: "need an image"});//check le s no  
             var newPartie = new Partie();
             var img = new Buffer(req.body.image,'base64');
             newPartie.image.data = img;
             newPartie.image.contentType = 'image/png'
             
             var callback = function(err, partieSaved){
                 if(err) return next(err);
                 return res.status(200).json(partieSaved.id);
             }
             newPartie.save(callback);
             
});





router.route("/:id")
        .get(function(req, res, next){
              Partie.find(function (err, parties) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      parties: parties
    });
  })
})


