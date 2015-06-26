function determineBreath(sumEachL,sumEachR){


var toljuste = 5;
var tolMoyen = 10;
    //peut-être à mettre en instantané
    if(kmL1-kmR1>0){
        //vent négatif, l'arbre doit pousser légèrement plus sur la droite
        console.log("joueur LEFT souffle plus fort");
    }else if(kmL1-kmR1<0){
        //vent positif, l'arbre doit pousser légèrement plus sur la gauche
        console.log("joueur RIGHT souffle plus fort");
    }else{
        //souffle parfait il pousse droit
        console.log("souffle parfait différence = 0");
    }
    
    //souffle harmonieux
    if (Math.abs(kmL1 - kmR1) <= toljuste) {
            console.log("souffle harmonieux");
            console.log(Math.abs(kmL1 - kmR1));
            if(TREE.tronc.length<TREEsizeMax){
               harmonicBreath();
            }else{
               //une fois que l'arbre a atteint sa taille adulte des fruits poussent
            }
            
            //jouer sur la vitesse de pousse
            //si le tronc est plus petit que X alors pousse
            //si le tronc est plus grand que X alors feuille
            //si le tronc est plus grand que X et feuille plus grand que X alors fruits
            
            
            //souffle bof
        } else if ((Math.abs(kmL1 - kmR1) > toljuste && Math.abs(kmL1 - kmR1)<= tolMoyen)) {
            console.log("souffle faux légères conséquences");
            console.log(Math.abs(kmL1 - kmR1));
            badBreath();
            // une ptite partie des feuilles s'envole
            // une petite partie des fruits s'envole
            
            
             //souffle chaotique
        } else if (Math.abs(kmL1 - kmR1) > tolMoyen){
            console.log("souffle faux graves conséquences");
            console.log(Math.abs(kmL1 - kmR1));
            veryBadBreath();
            // l'arbre perd toute ces feuilles
            //l'arbre perd tout ces fruits
            // l'arbre devient terne
            
        }


    
    
};
function manageGame() {
    
   
   
    //------ Calcul zone 5s. LEFT -------
    
    $.each(each5secArrayL,function(){sumEachL+=parseFloat(this) || 0;});
    aveEachL = sumEachL/each5secArrayL.length;
   
    
     //------ Calcul zone 5s. RIGHT --------
    
    $.each(each5secArrayR,function(){sumEachR+=parseFloat(this) || 0;});
    aveEachR = sumEachR/each5secArrayR.length;
    
    
    if(sumEachL!=0 || sumEachR !=0){
    //fonction qui impacte l'écart des souffles
    determineBreath(sumEachL,sumEachR);
    
    //reset du tableau joueurs
    
        each5secArrayL = [];
        sumEachL = 0;
        aveEachL = 0;

        each5secArrayR = [];
        sumEachR = 0;
        aveEachR = 0;
     }
    
    
}

function gameCompletion(){
    console.log("><><><><><><><><><   Game Completion ><><><><><><><><><");
    //connection.close();
    
    //------ Calcul zone FULL LEFT------/
    $.each(fullArrayL,function(){sumFullL+=parseFloat(this) || 0;});
    aveFullL = sumFullL/fullArrayL.length;
    var maxL = Math.max.apply(null, fullArrayL);
    
    //------- Calcul zone FULL RIGHT--------
    $.each(fullArrayR,function(){sumFullR+=parseFloat(this) || 0;});
    aveFullR = sumFullR/fullArrayR.length;
    var maxR = Math.max.apply(null, fullArrayR);
    
    
    //préparer les valeurs pour le post
    var d = new Date();
    var jour = d.getDay();
    var img = dessin.toDataURL("image/png", 0.5);
    var kmLmax = maxL,
        kmLmoy = Math.round(aveFullL *10)/10,
        kmRmax = maxR,
        kmRmoy = Math.round(aveFullR *10)/10,
        point = TREE.abricotArray.length,
        jour = jour
    //post Partie
    
   
    console.log("L'arrondi");
    console.log(kmRmoy);
// à coller dans gameCompletion en assignant les bonnes valeurs
    

    $.post("http://localhost:3000/api/images", {dataUrl: img})//renvoi l'id
            .done(function (data) {
                console.log(data);
                $.post("http://localhost:3000/api/parties", {
                    image_id: data,
                    kmLmax: kmLmax,
                    kmLmoy: kmLmoy,
                    kmRmax: kmRmax,
                    kmRmoy: kmRmoy,
                    point: point,
                    jour: jour
                })
                        .done(function (data) {
                            //console.log("Data Loaded: " + data);
                        });

            });
    
    
    //reset du tableau joueur Gauche  // attention: reseter les variables après le post de la partie
    fullArrayL = [];
    sumFullL = 0;
    aveFullL = 0;
    
    fullArrayR = [];
    sumFullR = 0;
    aveFullR = 0;
   
    
}

