var count2=0;
function manageGame() {
    
    console.log("><><><><><><><><><   Manage Game ><><><><><><><><><");
   
    console.log("------- Calcul zone 5s. LEFT ---------");
    
    
    $.each(each5secArrayL,function(){sumEachL+=parseFloat(this) || 0;});
    console.log("La somme joueur Left");
    console.log(sumEachL);
    console.log("La moyenne Left");
    aveEachL = sumEachL/each5secArrayL.length;
    console.log(aveEachL);
    
    //reset du tableau joueur Gauche
    each5secArrayL = [];
    sumEachL = 0;
    aveEachL = 0;
    
     console.log("------- Calcul zone 5s. RIGHT ---------");
    
    $.each(each5secArrayR,function(){sumEachR+=parseFloat(this) || 0;});
    console.log("La somme joueur Right");
    console.log(sumEachR);
    console.log("La moyenne Right");
    aveEachR = sumEachR/each5secArrayR.length;
    console.log(aveEachR);
    
    //reset du tableau joueur Gauche
    each5secArrayR = [];
    sumEachR = 0;
    aveEachR = 0;
}

function gameCompletion(){
    console.log("><><><><><><><><><   Game Completion ><><><><><><><><><");
    //connection.close();
    
    fullArrayL;
    sumFullL;
    aveFullL;
     
    console.log("------- Calcul zone FULL LEFT---------");
    $.each(fullArrayL,function(){sumFullL+=parseFloat(this) || 0;});
    console.log("La somme");
    console.log(sumFullL);
    console.log("La moyenne");
    aveFullL = sumFullL/fullArrayL.length;
    console.log(aveFullL);
    console.log("Le max");
    var maxL = Math.max.apply(null, fullArrayL);
    console.log(maxL);
    
    //reset du tableau joueur Gauche  // attention: reseter les variables après le post de la partie
    fullArrayL = [];
    sumFullL = 0;
    aveFullL = 0;
    
    console.log("------- Calcul zone FULL RIGHT---------");
    $.each(fullArrayR,function(){sumFullR+=parseFloat(this) || 0;});
    console.log("La somme");
    console.log(sumFullR);
    console.log("La moyenne");
    aveFullR = sumFullR/fullArrayR.length;
    console.log(aveFullR);
    console.log("Le max");
    var maxR = Math.max.apply(null, fullArrayR);
    console.log(maxR);
    
    //reset du tableau joueur Gauche  // attention: reseter les variables après le post de la partie
    fullArrayR = [];
    sumFullR = 0;
    aveFullR = 0;
   
    
}