$("#canvasRefresh").on("click", function(){
    if(!isStarted && !lockTimer){
   localStorage.setItem("finish", false); 
    localStorage.setItem("refresh", false);
    localStorage.setItem("refresh", true);
    location.reload(true);
     }else if(isStarted){
         
     }
    
});
$("#canvasStart").on("click", function(){
   
   if(!lockTimer && !rideauFerme){
      localStorage.setItem("refresh", false); 
       onButtonColor = "rgb(112, 97, 166)";
       refreshButtonColor = "rgb(32, 32, 32)";
    lockTimer = true;   
    delay = true;
    
   
    isStarted = true;
     
    localStorage.setItem("start", isStarted );
      setTimeout(update, 1000);
       function update() {
        var ss = timeG.split(":");
        var dt = new Date();
        dt.setHours(0);
        dt.setMinutes(ss[0]);
        dt.setSeconds(ss[1]);

        var dt2 = new Date(dt.valueOf() - 1000);
        var temp = dt2.toTimeString().split(" ");
        var ts = temp[0].split(":");
        timeG = (ts[1] + ":" + ts[2]);
        console.log(timeG);
        if (ts[1] > 0 || ts[2] > 0) {
            setTimeout(update, 1000);
        } else {
            //timer Finish
             
            
            isStarted = false;
            localStorage.setItem("start", isStarted );
            localStorage.setItem("finish", false); 
            localStorage.setItem("finish", true); 
            setTimeout(function(){
               nbAbricotsCourantG = 0;
               nbAbricotsArray = [0,0,0,0,0,0,0];
                    delay = false;
          timeG = gameDuration;
          onButtonColor = "rgb(32, 32, 32)";
          refreshButtonColor = "rgb(112, 97, 166)";
          lockTimer = false; //attention ça fait qu'on ne peut pas restarter tant que ce n'est pas eteint
      }, 15000);
            return;
        }
    }
    
    
    }//end if !lockTimer
});

window.addEventListener('storage', function(e) {
    
    
   rideauFerme = localStorage.getItem("rideauFerme");
   if(rideauFerme==="true"){
     
       rideauFerme = true;
   }else if(rideauFerme==="false"){
      
       rideauFerme = false;
   }
   
        //isStarted = localStorage.getItem("start");
  
   if(isStarted){
      
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
if(pressionG==null){
    pressionG = "000.0"
}
humiditeG = localStorage.getItem("humidite");
if(humiditeG==null){
    humiditeG = "00.0"
}
tempG = localStorage.getItem("temp");
if(tempG==null){
    tempG = "00.0"
}

    


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
    }
    nbPartieG = parseInt(localStorage.getItem("noPartie"))+1;
        
    }
    


});
$(document).ready(function () {
    
    initInfo();
    
});/////end DOM ready




    
   

    