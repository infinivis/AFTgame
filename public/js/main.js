
initManometer();
initTree();
setInterval(draw, 30);


///////////////////////////////////////////////// 
////    events  ///////////////////////////////// 
/////////////////////////////////////////////////

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
    img = dessin.toDataURL("image/jpeg", 1.0);
    img = dessin.toDataURL("image/png", 0.5);
   
    console.log(img.length);

    var kmLmax = 0,
            kmLmoy = 0,
            kmRmax = 0,
            kmRmoy = 0,
            point = 0

    $.post("http://localhost:3000/api/images", {dataUrl: img})//renvoi l'id
            .done(function (data) {
                console.log(data);
                $.post("http://localhost:3000/api/parties", {
                    image_id: data,
                    kmLmax: kmLmax,
                    kmLmoy: kmLmoy,
                    kmRmax: kmRmax,
                    kmRmoy: kmRmoy,
                    point: point
                })
                        .done(function (data) {
                            alert("Data Loaded: " + data);
                        });

            });

});

$("#stopDebri").on("click", function () {
    console.log("Stop Debri");
    TREE.stopDebri();
});
$("#newDebri").on("click", function () {
    console.log("New Debri");
    TREE.startDebri();
});
$("#runDebri").on("click", function () {
    console.log("Start Debri");

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

    startWS();


    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer()
    {
        count = count - 1;
        if (count <= 0)
        {
            clearInterval(counter);
            //counter ended, do something here
            console.log("Timer finish");
            count = 30;
            //connection.close();
            return;
        }

        //Do code for showing the number of seconds here
        console.log(count);
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

function timer()
{
    count = count - 1;

    console.log(count);

    //Do code for showing the number of seconds here
}

function fluidRotate(num1, num2) {



}
function simWindoo(player, force) {
    if (force == "faible") {
        kmh1 = Math.floor((Math.random() * 15) + 1);
    } else if (force == "fort") {
        kmh1 = Math.floor((Math.random() * 50) + 35);
    } else if (force == "juste") {
        kmh1 = Math.floor((Math.random() * 40) + 30);
    }

    if (player == "left") {
        kmL = kmh1;
    } else {
        kmR = kmh1;
    }

    convertKMtobar(kmL, kmR);
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