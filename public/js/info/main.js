window.addEventListener('storage', function(e) {
    
    console.log(e);
    
    var isStarted = localStorage.getItem("start");
    
    if(isStarted==="true"){
       
       timeG = localStorage.getItem("time");
       

//warningG = localStorage.getItem("warning");
lkmInstantG = localStorage.getItem("lkmInstant");
lkmInstantGTemp = parseFloat(lkmInstantG);
jaugeLeft = Math.pow(lkmInstantGTemp,1.2);

lkmPicG = localStorage.getItem("lkmPic");
lkmMoyG = localStorage.getItem("lkmMoy");

rkmInstantG = localStorage.getItem("rkmInstant");
rkmInstantGTemp = parseFloat(rkmInstantG);
jaugeRight = Math.pow(rkmInstantGTemp,1.2);

rkmPicG = localStorage.getItem("rkmPic");
rkmMoyG = localStorage.getItem("rkmMoy");
ecartNoG = localStorage.getItem("ecartNo");
jaugeMiddle;
    
        pressionG = localStorage.getItem("pression");
humiditeG = localStorage.getItem("humidite");
tempG = localStorage.getItem("temp");

    


nbAbricotsJourG = localStorage.getItem("nbAbricotsJour");
nbAbricotsSemaineG = localStorage.getItem("nbAbricotsSemaine");
nbAbricotsCourantG = localStorage.getItem("nbAbricotsCourant");

nbPartieG = parseInt(localStorage.getItem("noPartie"))+1;
        
    }else{//attention à verrouiller lors des changements du localstorage
      //timeG = "00:00";
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


    
   

    