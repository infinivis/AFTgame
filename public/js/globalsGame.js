//instant stat
var kmR = 2; //pour le vent
var kmL = 2; //pour le vent
var oldKmR = 2; 
var oldKmL = 2;
var kmR1=2; // pour l'affichage dans le manomètre et calcul
var kmL1=2; // pour l'affichage dans le manomètre et calcul
var kmh1; // pour les calculs en attendant le windoo

var howLength;

//windoo value
var pression=0;
var humidite=0;
var temperature=0;

//manageGame and player stat/////////
var croise = true; // le mode du jeu, le jeu se déroule en croisé ou en en même temps
var calculInterval= 5000; //en milliseconde
var gameDurationFather = "03:00";
var gameDuration = gameDurationFather;
localStorage.setItem("time", gameDuration);

var gameTimer;
var fini=false;
var ecart = 0;
var toljuste = 20;
var tolMoyen = 28;
localStorage.setItem("tolJuste", toljuste);
localStorage.setItem("tolMoyen", tolMoyen);
var tolMoyen = 10;
var noPartie = 0; //localStorage.getItem("noPartie");
localStorage.setItem("noPartie", noPartie);
localStorage.setItem("start", false);
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
var picL = 0;
var sumFullL;
var aveFullL;

var each5secArrayR  = [];
var sumEachR;
var aveEachR;
var fullArrayR = [] ;
var picR = 0;
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
var Linterval = null;
var Rinterval = null;
var counterUnGrow = 0;
var counterhowTimeUngrow = 0;
var counterGrow = 0;
var counterGame = 0;
var manageGameTimer = 0;
var growDuration= 3; //en seconde // plus vraiment utilisé, plutôt des variables internes à paramètrer
var unGrowDuration = 1; // en seconde

var testAngle = 0;
var exposant = 1;

//abricots
var abricotNumber =0;
localStorage.setItem("nbAbricotsCourant", abricotNumber);

//feuille
var proportion = 0.5;// modifie le nombre de feuille qui se décroche
var dureeVieprop = 300;
var feuillepartout = false;
var rotationVent = 1;
var ratioSize = 0.3;
var compteFeuille = 0;

//mano
var myAngle = 0;
var myWarning = false;
var myBar = 1.5;

//rideau
var posRideauY=0;


//    localStorage.setItem("nbAbricotsJour",recordJour); //webservice
//    localStorage.setItem("nbAbricotsSemaine",recordSemaine); //webservice

//    localStorage.setItem("time","rouge");
//    localStorage.setItem("warning","rouge");
//    
//    
//    localStorage.setItem("lkmPic",picL);
//    localStorage.setItem("lkmMoy",aveEachL);
;
//    localStorage.setItem("rkmPic",picR);
//    localStorage.setItem("rkmMoy",aveEachR);
//    localStorage.setItem("ecartNo","rouge");