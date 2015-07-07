$(document).ready(function () {
    
    console.log("ready!");
    
});/////end DOM ready

//test Save LocalStorage

//setItem(clé,valeur) : stocke une paire clé/valeur
//getItem(clé) : retourne la valeur associée à une clé
//removeItem(clé) : supprime la paire clé/valeur en indiquant le nom de la clé
//key(index): retourne la clé stockée à l'index spécifié
//clear(): efface toutes les paires
// .length

$("#localStorage").on("click", function(){
    
});
$("#setParams").on("click", function(){
    console.log("set Params");
    localStorage.setItem("pression",pression);
    localStorage.setItem("humidite",humidite);
    localStorage.setItem("temp",temperature);
    pression +=1;
    humidite +=1;
    temperature +=1;
   
});

startWS();
