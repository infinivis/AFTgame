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
    return res.status(202).json(parties);
    });
  })
 



        .post(function(req, res, next){
            //à check les no d'erreur
             if(!req.body.image_id) return res.status(422).json({message: "need an image id !"});//check le s no  
             var newPartie = new Partie();
             
            newPartie.image_id = req.body.image_id;
            newPartie.kmLmax = req.body.kmLmax;
            newPartie.kmLmoy = req.body.kmLmoy;
            newPartie.kmRmax = req.body.kmRmax;
            newPartie.kmRmoy = req.body.kmRmoy;
            newPartie.point = req.body.point;
            newPartie.jour = req.body.jour;
             
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
    return res.status(200).json(parties);
  })
})


