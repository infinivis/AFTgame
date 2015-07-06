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
        
    }else{
        
    }
    


});
$(document).ready(function () {
    
    initInfo();
    
});/////end DOM ready


    
   

    