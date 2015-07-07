//globals for infos Screen

var estCasse = false;
var isStarted = false;
var delay = false;
var pressionG =0;

var humiditeG=0;

var tempG = localStorage.getItem("temp");

var nbAbricotsSemaineG=0;

var nbAbricotsJourG=0;

var nbAbricotsCourantG=0;

var nbPartieG=0;

var timeG = localStorage.getItem("time");



var lkmInstantG=0;

var lkmPicG=0;

var lkmMoyG=0;

var rkmInstantG=0;

var rkmPicG=0;

var rkmMoyG=0;

var ecartNoG=0;
var ecartFloat; //celui qui est utilisé pour les conditions d'affichage

var jaugeLeft = 0; 
var jaugeRight = 0; 
var jaugeMiddle = 0;
        
        
var ecartColor;    //violet "rgb(112, 97, 166)"
var leftColor;     //rouge "rgb(202, 100, 101)"
var rightColor;    //vert "rgb(111, 183, 100)"
var warningG=false;
var tolJuste=localStorage.getItem("tolJuste");//les if doit etre ==="true"
var tolMoyen=localStorage.getItem("tolMoyen");

var limiteMaxRouge = 40;
var limiteMinVert = 28;
var limiteMaxVert = 32;
var limiteMaxVert = 32;




