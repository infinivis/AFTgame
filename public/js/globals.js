//instant stat
var kmR = 2; //pour le vent
var kmL = 2; //pour le vent
var kmR1=2; // pour l'affichage dans le manomètre et calcul
var kmL1=2; // pour l'affichage dans le manomètre et calcul
var kmh1; // pour les calculs en attendant le windoo

var howLength;

//manageGame and player stat/////////
var calculInterval= 5000; //en milliseconde
var gameDuration= 30;

var pointPartiePrécédente;
var recordJour;
var recordSemaine;
//dev variable
var myArray = [];
var sum = 0;
var moyenne = 0;
//prod variable
var each5secArrayL = [];
var sumEachL;
var aveEachL;
var fullArrayL = [];
var sumFullL;
var aveFullL;

var each5secArrayR  = [];
var sumEachR;
var aveEachR;
var fullArrayR = [] ;
var sumFullR;
var aveFullR;


//wind
var myWind = 0;

//tree
var widthFull = $(window).width();
var heightFull = $(window).height();
var dessin;
var arbrePositionX = 550;
var arbrePositionY = 800;
var troncColor = "#6B4226";
var TREE;
var growDuration= 2; //en seconde
var unGrowDuration = 1; // en seconde
var TREEsizeMax= 4000;

//mano
var myAngle = 0;
var myWarning = false;
var myBar = 1.5;