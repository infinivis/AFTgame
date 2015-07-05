// all the TREE functions 

//        TREE.decrocheFleurs();
//
//        TREE.wakeFleurs(); //setInterval
//
//        TREE.stopFleurs();
//
//        TREE.createFleurs(); //setInterval
//
//        TREE.decrocheFeuille();
//
//        TREE.wakeFeuille(); //setInterval
//
//        TREE.stopFeuille();
//
//        TREE.createFeuille(); //setInterval
//
//        TREE.stopAbricot();
//
//        TREE.createAbricot(); //setInterval
//
//        TREE.decrocheAbricot();
//
//        TREE.wakeAbricot(); //setInterval
//
//        TREE.stopWakeAbricot(); TREE.stopAutoGrow();TREE.stopWind();TREE.stopAbricot();TREE.stopFeuille();TREE.stopFleurs();
//
//        TREE.startWind(); //setInterval
//
//        TREE.stopWind();
//
//        TREE.startAutoGrow(); //setInterval
//
//        TREE.stopAutoGrow();
//
//        TREE.startUnGrow(); //setInterval


function determineBreath(sumEachL,sumEachR){

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
        //combo
    }
    
    //souffle harmonieux
    if (Math.abs(kmL1 - kmR1) <= toljuste) {
            console.log("souffle harmonieux");
            
            if(TREE.tronc.length<TREEsizeMax){ // ajouter une variable intermédaire pour les trois taille tailleADo, taille adulte
               harmonicBreath();
            }else{
               //une fois que l'arbre a atteint sa taille adulte des fruits poussent
               TREE.stopFleurs();
               TREE.createFleurs();
               console.log("TREE > TREEsizeMax");
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
            // les feuilles se fane un peu les couleurs perdent leurs clarté
            
            
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
    
   if(croise){
       //mode croisé
       
              //------ Calcul zone 5s. LEFT -------
    
    $.each(each5secArrayL,function(){
    sumEachL+=parseFloat(this) || 0;});
    aveEachL = sumEachL/each5secArrayL.length;
   
    
     //------ Calcul zone 5s. RIGHT --------
    
    $.each(each5secArrayR,function(){
    sumEachR+=parseFloat(this) || 0;});
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
     }else{
         //reset all
         TREE.stopFleurs();
TREE.stopWakeFleurs();
TREE.stopAbricot();
TREE.stopWakeAbricot();
TREE.stopFeuille();
TREE.stopWakeFeuille();
TREE.stopAutoGrow();
TREE.stopWind();
clearInterval(counterGrow);
    
     }

   }else{
       //mode en même temps en fait c'est faux je developpe le jeu en mode en meme tremps mais pas dans la bonne zone de if
//       //------ Calcul zone 5s. LEFT -------
//    
//    $.each(each5secArrayL,function(){sumEachL+=parseFloat(this) || 0;});
//    aveEachL = sumEachL/each5secArrayL.length;
//   
//    
//     //------ Calcul zone 5s. RIGHT --------
//    
//    $.each(each5secArrayR,function(){sumEachR+=parseFloat(this) || 0;});
//    aveEachR = sumEachR/each5secArrayR.length;
//    
//    
//    if(sumEachL!=0 || sumEachR !=0){
//    //fonction qui impacte l'écart des souffles
//    determineBreath(sumEachL,sumEachR);
//    
//    //reset du tableau joueurs
//    
//        each5secArrayL = [];
//        sumEachL = 0;
//        aveEachL = 0;
//
//        each5secArrayR = [];
//        sumEachR = 0;
//        aveEachR = 0;
//     }
     
   }
   
    
    
    
}

function gameCompletion(){
    console.log("><><><><><><><><><   Game Completion ><><><><><><><><><");
    
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/////////                                        //////////////
/////////         arret des setINterval          //////////////
/////////                                        //////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//// reset all tree
TREE.stopFleurs();
TREE.stopWakeFleurs();
TREE.stopAbricot();
TREE.stopWakeAbricot();
TREE.stopFeuille();
TREE.stopWakeFeuille();
TREE.stopAutoGrow();
TREE.stopWind();


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
    var kmLmax = 40;//maxL,
        kmLmoy = 30;//Math.round(aveFullL *10)/10,
        kmRmax = 35;//maxR,
        kmRmoy = 30;//Math.round(aveFullR *10)/10,
        point = abricotNumber,
        jour = 6;//jour


    console.log("Nombre d'abricots: "+abricotNumber);
    
    
    //post Partie
    
//    $.post("http://localhost:3000/api/images", {dataUrl: img})//renvoi l'id
//            .done(function (data) {
//                console.log(data);
//                $.post("http://localhost:3000/api/parties", {
//                    image_id: data,
//                    kmLmax: kmLmax,
//                    kmLmoy: kmLmoy,
//                    kmRmax: kmRmax,
//                    kmRmoy: kmRmoy,
//                    point: point,
//                    jour: jour
//                })
//                        .done(function (data) {
//                            //console.log("Data Loaded: " + data);
//                        });
//
//            });
    
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/////////                                        //////////////
/////////            reset des variables         //////////////
/////////                                        //////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
    //reset du tableau joueur Gauche  // attention: reseter les variables après le post de la partie
    fullArrayL = [];
    sumFullL = 0;
    aveFullL = 0;
    
    fullArrayR = [];
    sumFullR = 0;
    aveFullR = 0;
   
    
}

