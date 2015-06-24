var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    console.log(articles);
    res.render('index', {
//      title: 'Generator-Express MVC',
//      articles: articles
    });
  });
});

router.post('/',function(req, res, next){
            //à check les no d'erreur
             if(!req.body.title) return res.status(422).json({message: "need an image"});//check le s no  
             var article = new Article();
             article.title = req.body.title;
             var callback = function(err, articleSaved){
                 if(err) return next(err);
                 return res.status(200).json(articleSaved.id);
             }
             article.save(callback);
             
});
