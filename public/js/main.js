//$("#canvas").attr("width", widthFull);
//$("#canvas").attr("height", heightFull);
var imgFond;
dessin = document.getElementById("canvas");
dessin.context = dessin.getContext('2d');
setInterval(draw, 60);
console.log(widthFull);
console.log(heightFull);
getRecords();
///////////////////////////////////////////////// 
////    events  ///////////////////////////////// 
/////////////////////////////////////////////////

$("#testSong").on("click", function (e) {

audio["alarme"].play();
   
    
});

$("#reload").on("click", function () {

    console.log("reload");
    location.reload(true);
});

$("#date").on("click", function () {

    var d = new Date();
    var jour = d.getDay();
    if (jour == 0) {
        jour = 7;
    }
    console.log(jour);
});
$("#calcul").on("click", function () {


    console.log("------- Calcul zone ---------");
//    
//    console.log("------- test get max in array ---------");
//var arr = [20.4,40.1,80.2,-400.3];
//var maxValue = Math.max.apply(null, arr);
//console.log("maxValue");
//console.log(maxValue);
//    
//    $.each(myArray,function(){sum+=parseFloat(this) || 0;});
//    console.log("La somme du tableau");
//    console.log(sum);
//    console.log("La moyenne du tableau");
//    moyenne = sum/myArray.length;
//    
//    console.log(moyenne);
//    console.log("------- test math Random ---------");
//console.log(Math.random());
//console.log(Math.random()*10);
//console.log(Math.floor(Math.random()*10));

    console.log("------- test Fleurs ---------");

    for (i in TREE.tronc) {
        if (TREE.tronc[i].fleurs != null) {
            console.log(TREE.tronc[i].fleurs);
        }
    }
    ;

});

$("#webS").on("click", function () {

    $.get("http://localhost:3000/api/parties")
            .done(function (data) {
                console.log(data);
                $.each(data, function (key, value) {

                    $.get("http://localhost:3000/api/images/" + value.image_id) //fonctionne pas, il renvoit toutes les mimages et pas seulement celle dont l'id corrspond
                            .done(function (data) {

                                var img = new Image();
                                img.src = data.dataUrl;
                                console.log(data.dataUrl.length);
                                $("#screenshot").append(img);
//intéresant pour la sécurité
//var u32 = new Uint32Array([data.dataUrl]);
//var b64encoded = btoa(String.fromCharCode.apply(null, u32));
//img.src="data:image/png;base64,"+b64encoded;




                            });
                })


            });

});

$("#capture").on("click", function () {



//    img = dessin.toDataURL();
    //img = dessin.toDataURL("image/jpeg", 0.5);
    //img = dessin.toDataURL("image/jpeg", 1.0);
    img = dessin.toDataURL("image/png", 0.5);

    console.log(img.length);
// à coller dans gameCompletion en assignant les bonnes valeurs
    var kmLmax = 1,
            kmLmoy = 1,
            kmRmax = 1,
            kmRmoy = 1,
            point = 1,
            jour = 1

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

});

$("#decrocheFleurs").on("click", function () {
    TREE.decrocheFleurs();
});
$("#wakeFleurs").on("click", function () {
    TREE.wakeFleurs();
});
$("#stopFleurs").on("click", function () {
    TREE.stopFleurs();
});
$("#newFleurs").on("click", function () {
    TREE.createFleurs();
});
$("#decrocheFeuille").on("click", function () {
    TREE.decrocheFeuille();
});
$("#wakeFeuille").on("click", function () {

    TREE.wakeFeuille();
});
$("#stopFeuille").on("click", function () {
    TREE.stopFeuille();
});
$("#newFeuille").on("click", function () {
    TREE.createFeuille();
});
$("#countAbricot").on("click", function () {
    console.log(abricotNumber);
});
$("#stopAbricot").on("click", function () {
    console.log("Stop Abricot");
    TREE.stopAbricot();
});
$("#newAbricot").on("click", function () {
    console.log("New Abricot");
    TREE.createAbricot();
});
$("#decrocheAbricot").on("click", function () {
    console.log("Decroche Abricot");
    TREE.decrocheAbricot();
});
$("#wakeAbricot").on("click", function () {
    console.log("Wake Abricot");
    TREE.wakeAbricot();
});
$("#stopWake").on("click", function () {
    console.log("Stop Wake");
    TREE.stopWakeAbricot();
});

$("#recalculate").on("click", function () {
    console.log("recalculate");

    TREE.recalculate(true);
});
$("#length").on("click", function () {
    console.log(TREE.tronc.length);
});
$("#startWind").on("click", function () {
    TREE.startWind();
});
$("#stopWind").on("click", function () {
    TREE.stopWind();
});
$("#changeWind").on("click", function () {
    myWind += 1;
    console.log("Mon vent " + myWind);

});

$("#grow").on("click", function () {
    TREE = new Tree(60);
    TREE.startAutoGrow()
});
$("#stopGrow").on("click", function () {
    TREE.stopAutoGrow();
    console.log(TREE.tronc.length);
//    for (x=1000;x<TREE.tronc.length;x++){
//        console.log(TREE.tronc[x].length);
//    }
});
$("#unGrow").on("click", function () {
    TREE.startUnGrow();
});
$("#mode").on("click", function () {
    if (croise) {
        croise = false;
        console.log("MODE : ENSEMBLE");
    } else {
        croise = true;
        console.log("MODE : CROISE");
    }
});

$("#canvasReload").on( "click", function(e){
   
    location.reload(true);  
});

$("#closeRideau").on("click", function (e) {

   if(Rideauferme && !start){
       console.log("Rideau Ouvert");
       Rideauferme = false;
       localStorage.setItem("rideauFerme", Rideauferme);

   }else if (!start){
       Rideauferme = true;
       console.log("Rideau Fermé");
       localStorage.setItem("rideauFerme", Rideauferme);

   }
   
    
});

function startFunction(){
        if(!Rideauferme){
            lockGameCompletion = 1;
    abricotNumber = 0;
    localStorage.setItem("nbAbricotsCourant", abricotNumber);
    
    TREE = new Tree(60);

    
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/////////                                        //////////////
/////////               initialisation           //////////////
/////////                                        //////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//
// reset all tree
    TREE.stopFleurs();
    TREE.stopWakeFleurs();
    TREE.stopAbricot();
    TREE.stopWakeAbricot();
    TREE.stopFeuille();
    TREE.stopWakeFeuille();
    TREE.stopAutoGrow();
    TREE.stopWind();
    TREE.startWind();



    //joueur left
    each5secArrayL = [];
    sumEachL = 0;
    aveEachL = 0;

    fullArrayL = [];
    sumFullL = 0;
    aveFullL = 0;

    //joueur right
    each5secArrayR = [];
    sumEachR = 0;
    aveEachR = 0;
    fullArrayR = [];
    sumFullR = 0;
    aveFullR = 0;
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/////////                                        //////////////
/////////               fonctions à lancer       //////////////
/////////                                        //////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

    clearInterval(counterGrow);
    clearInterval(counterUnGrow);
    clearInterval(counterGame);
    clearInterval(manageGameTimer);
    growTREEwithtimer(3);

    manageGameTimer = setInterval(manageGame, calculInterval);

}//end if rideau fermé 
    }


//localStorage
window.addEventListener('storage', function(e) {
    
    if(e.key==="start"){
        console.log(e.newValue);
      start = e.newValue;
   if(start==="true"){
       start = true;
   }else if (start==="false"){
        start = false; 
   }
    if(start){
       // console.log("start");
       startFunction();
    }  
    }else if(e.key==="finish"){
       finish = e.newValue;
       if(finish==="true"){
       finish = true;
   }else if (finish==="false"){
        finish = false;
   }
   if(finish){
       gameCompletion();
          clearInterval(manageGameTimer);
          console.log("Timer finish");
   }
    }
  
 if(e.key==="refresh"){
      refresh = e.newValue;
      if(refresh==="true"){
       location.reload(true);
   }else if (refresh==="false"){
        refresh = false;
   }
    }
  
   //lockGameCompletion!=0
      
          
    
   
    
    
});
 

$("#end").on("click", function () {
    console.log("end button");
    count = 0;

});

$("#colorWorse").on("click", function () {
    console.log("color worsing");
//       var rgb = rgb(45,45,69);
//       rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
// var finalColor = "#" +
//  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
//  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
//  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
//
//       
////       var changingColor = troncColor.substring(1);
////       var colorInt = parseInt(changingColor);
//       console.log(finalColor);
//       //var newColor = colorInt+10;
//       //console.log(newColor);
//      
//       
    troncColor = "#9D1309";

});

$("#testMoveArrowFor").on("click", function () {
    console.log("Move arrow +");

    if (myAngle < 15 * 0.15) {
        myAngle = myAngle + 0.15;

    } else {

    }


});
$("#testMoveArrowBack").on("click", function () {
    console.log("Move arrow -");

    if (myAngle > 0) {
        myAngle = myAngle - 0.15;

    } else if(e.witch==1){
     
    }

});

$("#stopSouffle").on("click", function () {

});
$("#angle6").on("click", function () {
    testAngle = 6;
    console.log(testAngle);
});
$("#testAnglePlus").on("click", function () {
    testAngle += 0.1;
    console.log(testAngle);
});
$("#testAngleMinus").on("click", function () {
    testAngle -= 0.1;
    console.log(testAngle);

});
$("#j1FAIBLE").on("click", function () {
    console.log("j1 FAIBLE");
    clearInterval(Linterval);
    Linterval = setInterval(function () {
        simWindoo("left", "faible")
    }, 1000);

});
$("#j2FAIBLE").on("click", function () {
    console.log("j2 FAIBLE");
    clearInterval(Rinterval);
    Rinterval = setInterval(function () {
        simWindoo("right", "faible")
    }, 1000);

});
$("#j1_0").on("click", function () {
    console.log("j1 FAIBLE");
    clearInterval(Linterval);
    Linterval = setInterval(function () {
        simWindoo("left", 0)
    }, 1000);


});
$("#j2_0").on("click", function () {
    console.log("j2 FAIBLE");
    clearInterval(Rinterval);
    Rinterval = setInterval(function () {
        simWindoo("right", 0)
    }, 1000);

});
$("#j1JUSTE").on("click", function () {
    console.log("j1 JUSTE");
    clearInterval(Linterval);
    Linterval = setInterval(function () {
        simWindoo("left", "juste")
    }, 1000);

});
$("#j2JUSTE").on("click", function () {
    console.log("j2 JUSTE");
    clearInterval(Rinterval);
    Rinterval = setInterval(function () {
        simWindoo("right", "juste")
    }, 1000);

});
$("#j1FORT").on("click", function () {
    console.log("j1 FORT");
    clearInterval(Linterval);
    Linterval = setInterval(function () {
        simWindoo("left", "fort")
    }, 1000);
});
$("#j2FORT").on("click", function () {
    console.log("j2 FORT");
    clearInterval(Rinterval);
    Rinterval = setInterval(function () {
        simWindoo("right", "fort")
    }, 1000);
});

$("#warning").on("click", function () {
    console.log("Warning");


    if (myWarning) {
        myWarning = false;
    } else {
        myWarning = true;
    }

});

$(document).on("WindIncoming", function (event, arg1) {

    console.log(arg1);

});

////////////////////////////////////////////////
///////////// functions ////////////////////////
////////////////////////////////////////////////

function fluidValueL() {

    var fluid = setInterval(function () {

        kmL -= 0.5
        kmL = Math.round(kmL * 10) / 10;

    }, 60);

}
function fluidValueR() {

    var fluid = setInterval(function () {


        kmR -= 0.5
        kmR = Math.round(kmR * 10) / 10;

    }, 60);

}


function simWindoo(player, force) {
    if (force == "faible") {
        kmh1 = Math.floor(Math.random() * (15 - 10 + 1) + 10);

    } else if (force == "fort") {
        kmh1 = Math.floor(Math.random() * (50 - 39 + 1) + 39);
    } else if (force == "juste") {
        kmh1 = Math.floor(Math.random() * (32 - 28 + 1) + 28);

    } else if (force == 0) {
        kmh1 = Math.floor(Math.random() * (5 - 0 + 1) + 0);
        kmh1 = 0;
    }

    if (player == "left") {
        oldKmL = kmL;


        //if(kmh1>0){
        kmL = kmh1;
        //fluidValueL();
        //}
        kmL1 = kmh1;
        each5secArrayL.push(kmL1);
        fullArrayL.push(kmL1);
        


        //------ Calcul zone FULL LEFT------/
        sumFullL = fullArrayL.reduce(function (a, b) {
            return a + b;
        });
        aveFullL = sumFullL / fullArrayL.length;
        aveFullL = Math.round(aveFullL * 10) / 10;
        picL = Math.max.apply(null, fullArrayL);
        localStorage.setItem("lkmMoy", aveFullL);
        localStorage.setItem("lkmPic", picL);
        localStorage.setItem("lkmInstant", kmL1);


    } else {
        oldKmR = kmR;
        //if(kmh1>0){
        kmR = kmh1;

        //}
        kmR1 = kmh1;
        each5secArrayR.push(kmR1);
        fullArrayR.push(kmR1);

        //------- Calcul zone FULL RIGHT--------
        sumFullR = fullArrayR.reduce(function (a, b) {
            return a + b;
        });
        aveFullR = sumFullR / fullArrayR.length;
        aveFullR = Math.round(aveFullR * 10) / 10;
        picR = Math.max.apply(null, fullArrayR);
        localStorage.setItem("rkmPic", picR);
        localStorage.setItem("rkmMoy", aveFullR);
        localStorage.setItem("rkmInstant", kmR1);


    }

    if (kmL1 - kmR1 != 0) {


        ecart = Math.abs(kmL1 - kmR1);

    } else {
        ecart = 0;
    }
    localStorage.setItem("ecartNo", ecart);

    convertKMtobar(kmL1, kmR1);
}
;
function convertKMtobar(kmL, kmR) {
    var num1 = myBar;
    myBar = Math.round((kmL + kmR) * 0.016 * 10) / 10;
    myAngle = myBar;
    if (myBar < 2) {
        myWarning = false;
    } else {
        myWarning = true;
    }

}
;

function getRecords() {
    //bestWEEK 
    $.get("http://localhost:3000/api/parties/week")
            .done(function (semaine) {

                var semaineTemp = semaine.point;
                localStorage.setItem("nbAbricotsSemaine", semaineTemp);
            });

    //bestDAY
    $.get("http://localhost:3000/api/parties/day")
            .done(function (day) {

                var dayTemp = day.point;
                localStorage.setItem("nbAbricotsJour", dayTemp);

            });



}

function differenceSouffle() {
    //peut-être à mettre en instantané
    if (kmL1 - kmR1 > 0) {
        //vent négatif, l'arbre doit pousser légèrement plus sur la droite
        console.log("joueur LEFT souffle plus fort");
        testAngle -= 0.0004;
    } else if (kmL1 - kmR1 < 0) {
        //vent positif, l'arbre doit pousser légèrement plus sur la gauche
        console.log("joueur RIGHT souffle plus fort");

        testAngle += 0.0004;
    } else if(kmL1!=0 && kmR1 !=0){
    
        //souffle parfait il pousse droit
        console.log("souffle parfait différence = 0");
        //combo
    }
}
;