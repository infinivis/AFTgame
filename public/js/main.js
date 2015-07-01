//$("#canvas").attr("width", widthFull);
//$("#canvas").attr("height", heightFull);
initManometer();
initTree();
setInterval(draw, 10);
console.log(widthFull);
console.log(heightFull);


///////////////////////////////////////////////// 
////    events  ///////////////////////////////// 
/////////////////////////////////////////////////

$("#testReso").on("click", function () {

$("#canvas").attr("width", widthFull);
$("#canvas").attr("height", heightFull);

});
$("#date").on("click", function () {

var d = new Date();
var jour = d.getDay();
console.log(jour);

});
$("#calcul").on("click", function () {


   console.log("------- Calcul zone ---------");
    
    console.log("------- test get max in array ---------");
var arr = [20.4,40.1,80.2,-400.3];
var maxValue = Math.max.apply(null, arr);
console.log("maxValue");
console.log(maxValue);
    
    $.each(myArray,function(){sum+=parseFloat(this) || 0;});
    console.log("La somme du tableau");
    console.log(sum);
    console.log("La moyenne du tableau");
    moyenne = sum/myArray.length;
    
    console.log(moyenne);

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

$("#countAbricot").on("click", function () {
    console.log(TREE.abricotArray.length);
});
$("#stopAbricot").on("click", function () {
    console.log("Stop Abricot");
    TREE.stopAbricot();
});
$("#newAbricot").on("click", function () {
    console.log("New Abricot");
    TREE.createAbricot();
});
$("#wakeAbricot").on("click", function () {
    console.log("Wake Abricot");
TREE.wakeAbricot();
});
$("#stopWake").on("click", function () {
    console.log("Stop Wake");
TREE.stopWakeAbricot();
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
    myWind += 0.01;
    console.log("Mon vent                     " + myWind);

});

$("#grow").on("click", function () {
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
$("#start").on("click", function () {
    console.log("Start");

    //startWS();
    initTree();
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
    TREE.startWind();
    growTREEwithtimer();
    var count = gameDuration;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
    var manageGameTimer = setInterval(manageGame, calculInterval);
    function timer()
    {
        count = count - 1;
        if (count <= 0)
        {
            clearInterval(counter);
            clearInterval(manageGameTimer);
            //counter ended, do something here
            console.log("Timer finish");
            count = gameDuration;
            gameCompletion();
            return;
        }

        //Do code for showing the number of seconds here
        console.log(""+count);
        
    }
    



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

    } else {

    }

});

$("#j1FAIBLE").on("click", function () {
    console.log("j1 FAIBLE");
//$( document ).trigger( "WindIncoming", kmh1 );
    setInterval(function () {
        simWindoo("left", "faible")
    }, 1000);
});


$("#j2FAIBLE").on("click", function () {
    console.log("j2 FAIBLE");
    setInterval(function () {
        simWindoo("right", "faible")
    }, 1000);


});
$("#j1JUSTE").on("click", function () {
    console.log("j1 JUSTE");
    setInterval(function () {
        simWindoo("left", "juste")
    }, 1000);

});
$("#j2JUSTE").on("click", function () {
    console.log("j2 JUSTE");
    setInterval(function () {
        simWindoo("right", "juste")
    }, 1000);

});
$("#j1FORT").on("click", function () {
    console.log("j1 FORT");
    setInterval(function () {
        simWindoo("left", "fort")
    }, 1000);
});
$("#j2FORT").on("click", function () {
    console.log("j2 FORT");
    setInterval(function () {
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

var fluid = setInterval(function(){
           
        kmL-=0.5
        kmL = Math.round(kmL *10)/10;
      
}, 60);

}
function fluidValueR() {

var fluid = setInterval(function(){
   
         
        kmR-=0.5
        kmR = Math.round(kmR *10)/10;
        
}, 60);

}


function simWindoo(player, force) {
    if (force == "faible") {
        kmh1 = Math.floor((Math.random() * 15) + 1);
        kmh1 = 10;
    } else if (force == "fort") {
        kmh1 = Math.floor((Math.random() * 50) + 35);
    } else if (force == "juste") {
        kmh1 = Math.floor((Math.random() * 40) + 30);
    }
    
    
    if (player == "left") {
        oldKmL = kmL;
        each5secArrayL.push(kmh1);
         fullArrayL.push(kmh1);
         //if(kmh1>0){
             kmL = kmh1;
             //fluidValueL();
         //}
         kmL1 = kmh1;
      
         
    } else {
        oldKmR = kmR;
        each5secArrayR.push(kmh1);
        fullArrayR.push(kmh1);
        
         //if(kmh1>0){
             kmR = kmh1;
             //fluidValueR();
         //}
         kmR1 = kmh1;
         
        
    }

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