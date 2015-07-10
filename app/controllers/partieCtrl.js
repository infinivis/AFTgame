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
            newPartie.noPartie = req.body.noPartie;

            var callback = function (err, partieSaved) {
                if (err)return next(err);
                return res.status(200).json(partieSaved.id);
            }
            newPartie.save(callback);
             
});



router.route("/day")
        .get(function (req, res, next) {
            var d = new Date();
            var jour = d.getDay();
            if(jour==0){
                jour = 7;
            }
            if(jour==1){
                jour = 8;
            }
            console.log(jour);
            jour=jour-1;
            jour= 5;//enlever cette ligne pour choper le jour courrant et checker les assignations dans les if si dessus pour etre sur
             console.log(jour);
            
           
                Partie.findOne({jour: jour}).sort('-point').exec(function (err, partieMaxJour) {
                if (err)return next(err);
                if(partieMaxJour){
                return res.status(200).json(partieMaxJour);
                }else{
                  jour -= 1;
                  
                   Partie.findOne({jour: jour}).sort('-point').exec(function (err, partieMaxJour) {
                if (err)return next(err);
                if(partieMaxJour){
                return res.status(200).json(partieMaxJour);
                }else{
                  return;
                  
                  
                }
            }); 
                  
                }
            }); 
        });
        
router.route("/week")
        .get(function (req, res, next) {         
            Partie.findOne().sort('-point').exec(function (err, partieMaxSemaine) {
                if (err)return next(err);
                
                return res.status(200).json(partieMaxSemaine);
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


