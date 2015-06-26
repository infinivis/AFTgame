var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Partie = mongoose.model('Partie');
  
  
  module.exports = function (app) {
  app.use('/api/parties', router);
};

  
router.route("/")
        .get(function(req, res, next) {
            Partie.find(function (err, parties) {
                if (err) return next(err);
                return res.status(202).json(parties);
            });
        })
        .post(function (req, res, next) {
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

            var callback = function (err, partieSaved) {
                if (err)return next(err);
                return res.status(200).json(partieSaved.id);
            }
            newPartie.save(callback);
             
});



router.route("/point")
        .get(function (req, res, next) {
            var newObject = {};
            var d = new Date();
            var jour = d.getDay();
            jour=jour-1;
            
            Partie.findOne().sort('-point').exec(function (err, partieMaxSemaine) {
                if (err)return next(err);
                newObject.partieMaxSemaine = partieMaxSemaine;
                
                Partie.findOne({jour: jour}).sort('-point').exec(function (err, partieMaxJour) {
                if (err)return next(err);
                newObject.partieMaxJour = partieMaxJour;
                
                return res.status(200).json(newObject);
            });
                
            });
            
        });
        
        router.route("/:id")
        .get(function(req, res, next){
          Partie.findById(req.params.id, function (err, partie) {
    if (err) return next(err);
    console.log("dans /:id");
    return res.status(200).json(partie);
  });
});


