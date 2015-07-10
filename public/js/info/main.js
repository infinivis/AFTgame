window.addEventListener('storage', function(e) {
        isStarted = localStorage.getItem("start");
    
    if(isStarted==="true"){
       delay = true;
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
jaugeMiddle =  parseFloat(ecartNoG)*2.4;
ecartFloat =  Math.round(parseFloat(ecartNoG));

    
        pressionG = localStorage.getItem("pression");
humiditeG = localStorage.getItem("humidite");
tempG = localStorage.getItem("temp");

    


nbAbricotsJourG = localStorage.getItem("nbAbricotsJour");
nbAbricotsSemaineG = localStorage.getItem("nbAbricotsSemaine");
nbAbricotsCourantG = localStorage.getItem("nbAbricotsCourant");



  if(nbAbricotsCourantG.length==1){
        nbAbricotsArray[6] = nbAbricotsCourantG.substr(0,1);
    }else if(nbAbricotsCourantG.length==2){
        nbAbricotsArray[5] = nbAbricotsCourantG.substr(0,1);
        nbAbricotsArray[6] = nbAbricotsCourantG.substr(1,1);
       
    }else if(nbAbricotsCourantG.length==3){
        nbAbricotsArray[4] = nbAbricotsCourantG.substr(0,1);
        nbAbricotsArray[5] = nbAbricotsCourantG.substr(1,1);
        nbAbricotsArray[6] = nbAbricotsCourantG.substr(2,2);
    }else if(nbAbricotsCourantG.length==4){
        nbAbricotsArray[3] = nbAbricotsCourantG.substr(0,1);
        nbAbricotsArray[4] = nbAbricotsCourantG.substr(1,1);
        nbAbricotsArray[5] = nbAbricotsCourantG.substr(2,2);
        nbAbricotsArray[6] = nbAbricotsCourantG.substr(3,3);
    }else if(nbAbricotsCourantG.length==5){
        nbAbricotsArray[2] = nbAbricotsCourantG.substr(0,1);
        nbAbricotsArray[3] = nbAbricotsCourantG.substr(1,1);
        nbAbricotsArray[4] = nbAbricotsCourantG.substr(2,2);
        nbAbricotsArray[5] = nbAbricotsCourantG.substr(3,3);
        nbAbricotsArray[6] = nbAbricotsCourantG.substr(4,4);
    }else if (nbAbricotsCourantG.length==6){
        nbAbricotsArray[1] = nbAbricotsCourantG.substr(0,1);
        nbAbricotsArray[2] = nbAbricotsCourantG.substr(1,1);
        nbAbricotsArray[3] = nbAbricotsCourantG.substr(2,2);
        nbAbricotsArray[4] = nbAbricotsCourantG.substr(3,3);
        nbAbricotsArray[5] = nbAbricotsCourantG.substr(4,4);
        nbAbricotsArray[6] = nbAbricotsCourantG.substr(5,5);
    }else if (nbAbricotsCourantG.length==7){
        nbAbricotsArray[0] = nbAbricotsCourantG.substr(0,1);
        nbAbricotsArray[1] = nbAbricotsCourantG.substr(1,1);
        nbAbricotsArray[2] = nbAbricotsCourantG.substr(2,2);
        nbAbricotsArray[3] = nbAbricotsCourantG.substr(3,3);
        nbAbricotsArray[4] = nbAbricotsCourantG.substr(4,4);
        nbAbricotsArray[5] = nbAbricotsCourantG.substr(5,5);
        nbAbricotsArray[6] = nbAbricotsCourantG.substr(6,6);
    }else{
    }
    
//        nbAbricotsArray[0] = parseInt(nbAbricotsCourantG.substr(i,1));
//    
//        nbAbricotsArray[i] = parseInt(nbAbricotsCourantG.substr(i,i));
                        





nbPartieG = parseInt(localStorage.getItem("noPartie"))+1;
        
    }else{//attention à verrouiller lors des changements du localstorage
      setTimeout(function(){
          delay = false;
      }, 15000);
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


    
   

    