window.addEventListener('storage', function(e) {
    
    
    
    var isStarted = localStorage.getItem("start");
    
    if(isStarted==="true"){
       
       timeG = localStorage.getItem("time");
    
        pressionG = localStorage.getItem("pression");
humiditeG = localStorage.getItem("humidite");
tempG = localStorage.getItem("temp");

    
nbAbricotsJourG = localStorage.getItem("nbAbricotsJour");
nbAbricotsSemaineG = localStorage.getItem("nbAbricotsSemaine");
nbAbricotsCourantG = localStorage.getItem("nbAbricotsCourant");

nbPartieG = parseInt(localStorage.getItem("noPartie"))+1;

//timeG = 
//warningG = localStorage.getItem("warning");
lkmInstantG = localStorage.getItem("lkmInstant");
lkmPicG = localStorage.getItem("lkmPic");
lkmMoyG = localStorage.getItem("lkmMoy");
rkmInstantG = localStorage.getItem("rkmInstant");
rkmPicG = localStorage.getItem("rkmPic");
rkmMoyG = localStorage.getItem("rkmMoy");
ecartNoG = localStorage.getItem("ecartNo");
        
    }else{//attention à verrouiller lors des changements du localstorage
      timeG = "00:00";
    }
    


});
$(document).ready(function () {
    
    initInfo();
    
});/////end DOM ready

$("#testMoveArrowFor").on("click", function(){
    //if(Math.random()<0.5){
          jaugeLeft += Math.random()*10;
    jaugeRight += Math.random()*10;
   // jaugeMiddle -= Math.random()*10;
   // }else{
        jaugeMiddle += Math.random()*10;
     //   jaugeLeft -= Math.random()*10;
  //  jaugeRight -= Math.random()*10;
   // }
    
    
})


    
   

    