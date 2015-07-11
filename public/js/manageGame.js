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


function determineBreath(sumEachL, sumEachR) {

    //souffle harmonieux
    if (Math.abs(kmL1 - kmR1) <= toljuste && kmL1!=0 && kmR1!=0) {
        console.log("souffle HARMONIEUX");
        TREE.stopFeuille();
        TREE.createFeuille();
        if (TREE.tronc.length < TREE.TREEsizeMax) { // ajouter une variable intermédaire pour les trois taille tailleADo, taille adulte
            var count = 3;//count en seconde
            var interval = 1000;//count en seconde
            var minus = 1;//count en seconde
            TREE.maxNode +=50;
            growTREEwithtimer(count, interval, minus);


        } else{
            TREE.stopFleurs();
            TREE.createFleurs();
            console.log("TREE > TREEsizeMax");
            //une fois que l'arbre a atteint sa taille adulte des fruits poussent
        }

        //jouer sur la vitesse de pousse
        //si le tronc est plus petit que X alors pousse
        //si le tronc est plus grand que X alors feuille
        //si le tronc est plus grand que X et feuille plus grand que X alors fruits


        //souffle bof
    } else if ((Math.abs(kmL1 - kmR1) > toljuste && Math.abs(kmL1 - kmR1) <= tolMoyen)) {
        TREE.stopAutoGrow();
        console.log("souffle faux légères conséquences");
        console.log(Math.abs(kmL1 - kmR1));

        //enleve une petite proportion de feueille
        proportion = 0.3;
        TREE.decrocheFeuille(); //ajouter des paramètres de combien décrocher
        TREE.decrocheFleurs();
        TREE.decrocheAbricot();
        // une ptite partie des feuilles s'envole
        // une petite partie des fruits s'envole
        // les feuilles se fane un peu les couleurs perdent leurs clarté












///////////////////////        //souffle chaotique
///////////////////////        //souffle chaotique
    } else if (Math.abs(kmL1 - kmR1) > tolMoyen) {

       
        console.log("souffle faux graves conséquences");
        console.log(Math.abs(kmL1 - kmR1));
        if (kmL1 > kmR1) {
            //vent négatif, l'arbre doit pousser légèrement plus sur la droite
            console.log("joueur LEFT souffle plus fort");
           testAngle -= 0.001;
        } else if (kmL1 < kmR1) {
            //vent positif, l'arbre doit pousser légèrement plus sur la gauche
            console.log("joueur RIGHT souffle plus fort");
            testAngle += 0.001;
        }
        console.log("VeryBadBreath");
        var count = 1;
 // l'arbre perd toute ces feuilles
        //l'arbre perd tout ces fruits
        // l'arbre devient terne
        proportion = 0.8;
        TREE.stopAutoGrow();
        TREE.stopFeuille();
        TREE.stopFleurs();
        TREE.stopAbricot();
        TREE.wakeFeuille();
        TREE.wakeFleurs();
        TREE.wakeAbricot();
        TREE.decrocheFeuille();
        TREE.decrocheFleurs();
        TREE.decrocheAbricot();
        //TREE.recalculate(false);

        //growTREEwithtimer(count,1000, 1);
        //TREE.maxNode += 10;

//    if(TREE.tronc[0].y-TREE.tronc[TREE.tronc.length-1].y<80){
//        console.log("<200");
//    }else{
//       growTREEwithtimer(count,100, 0.1);
//       
//    }


        //count en seconde


    }else{
        TREE.stopAutoGrow();
        console.log(kmL1+" "+kmR1);
    }

}
;
function manageGame() {




    if (each5secArrayL != 0 || each5secArrayR != 0) { // ou peut kmL1 kmR1
        //debug quand il n'y a pas de valeurs
        //------ Calcul zone 5s. LEFT -------
        if (each5secArrayL != 0) {
            sumEachL = each5secArrayL.reduce(function (a, b) {
                return a + b;
            });
        } else {
            sumEachL = 0
        }
        if (each5secArrayR != 0) {
            sumEachR = each5secArrayR.reduce(function (a, b) {
                return a + b;
            });
        } else {
            sumEachR = 0
        }

        //------ Calcul zone 5s. RIGHT --------



        //fonction qui impacte l'écart des souffles
        determineBreath(sumEachL, sumEachR);

        //reset du tableau joueurs

        each5secArrayL = [];
        sumEachL = 0;


        each5secArrayR = [];
        sumEachR = 0;

    } else { ////// A checker les restet
        //reset all
 TREE.stopFleurs();

TREE.stopAbricot();

TREE.stopFeuille();
clearInterval(counterGrow);

TREE.stopAutoGrow();



    }


}

function gameCompletion() {
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
    //$.each(fullArrayL,function(){sumFullL+=parseFloat(this) || 0;});
    sumFullL = fullArrayL.reduce(function (a, b) {
        return a + b;
    });
    aveFullL = sumFullL / fullArrayL.length;
    aveFullL = Math.round(aveFullL * 10) / 10;
    picL = Math.max.apply(null, fullArrayL);
    localStorage.setItem("lkmMoy", aveFullL);
    localStorage.setItem("lkmPic", picL);


    //------- Calcul zone FULL RIGHT--------
    sumFullR = fullArrayR.reduce(function (a, b) {
        return a + b;
    });
    aveFullR = sumFullR / fullArrayR.length;
    aveFullR = Math.round(aveFullR * 10) / 10;
    picR = Math.max.apply(null, fullArrayR);
    localStorage.setItem("rkmPic", picR);
    localStorage.setItem("rkmMoy", aveFullR);



    //préparer les valeurs pour le post
    var d = new Date();
    var jour = d.getDay();
    var img = dessin.toDataURL("image/png", 0.5);
    var kmLmax = picL,
            kmLmoy = Math.round(aveFullL * 10) / 10,
            kmRmax = picR,
            kmRmoy = Math.round(aveFullR * 10) / 10,
            point = abricotNumber


    //compteur du nombre de partie
    var noPartieTemp = localStorage.getItem("noPartie");
    noPartie = parseInt(noPartieTemp);
    noPartie += 1;
    localStorage.setItem("start", false);
    localStorage.setItem("noPartie", noPartie);
    localStorage.setItem("nbAbricotsCourant", 0);

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
//                    jour: jour,
//                    noPartie: noPartie
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
//

    testAngle = 0;
    //reset du tableau joueur Gauche  // attention: reseter les variables après le post de la partie
    fullArrayL = [];
    sumFullL = 0;
    aveFullL = 0;

    fullArrayR = [];
    sumFullR = 0;
    aveFullR = 0;


}

function growTREEwithtimer(count, interval, minus) {
    TREE.stopAutoGrow();
    TREE.startAutoGrow();
    var count2 = count;
    counterGrow = setInterval(timer, interval); //1000 will  run it every 1 second

    function timer()
    {
        count2 = count2 - minus;
        if (count2 <= 0)
        {
            clearInterval(counterGrow);
            TREE.stopAutoGrow();
            //counter ended, do something here

            count2 = count;

            return;
        }

        //Do code for showing the number of seconds here


    }
}

function unGrowTREEwithtimer(count) {
    TREE.stopAutoGrow();
    TREE.startUnGrow();
    TREE.maxNode += 200;
    var count2 = count;
    counterUnGrow = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer()
    {
        count2 = count2 - 1;
        if (count2 <= 0)
        {
            clearInterval(counterUnGrow);
            TREE.stopAutoGrow();
            //counter ended, do something here

            count2 = count;

            return;
        }

        //Do code for showing the number of seconds here
        console.log("" + count);

    }
}

