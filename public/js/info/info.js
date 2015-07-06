   // Main canvas and context references
    var canvas;
    var ctx;

    // Frames per second
    var fps = 60.0;

function initInfo() {

      canvas = document.getElementById("canvasInfo");
      ctx = canvas.getContext("2d");
      setInterval(drawFrame, (1000 / fps));
      }
      
    function drawFrame(){
         fond(ctx);

      pression(ctx);

      humidite(ctx);

      temp(ctx);

      nbAbricotsSemaine(ctx);

      nbAbricotsJour(ctx);

      nbAbricotsCourant(ctx);

      nbPartie(ctx);

      time(ctx);

      warning(ctx);

      lkmInstant(ctx);

      lkmPic(ctx);

      lkmMoy(ctx);

      rkmInstant(ctx);

      rkmPic(ctx);

      rkmMoy(ctx);

      ecartNo(ctx);

      ecartMano(ctx);

     lMano(ctx);

      rMano(ctx);
    }

     
      
    

    function fond(ctx) {

      // fond
      ctx.drawImage(document.getElementById("image1"), 0.0, 0.0);
    }

    function pression(ctx) {

      // pression/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(pressionG, 994.8, 972.3);
      ctx.restore();
    }

    function humidite(ctx) {

      // humidite/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(humiditeG, 1025.7, 871.3);
      ctx.restore();
    }

    function temp(ctx) {

      // temp/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(tempG, 1025.7, 774.4);
      ctx.restore();
    }

    function nbAbricotsSemaine(ctx) {

      // nbAbricotsSemaine/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(nbAbricotsSemaineG, 63.0, 969.3);
      ctx.restore();
    }

    function nbAbricotsJour(ctx) {

      // nbAbricotsJour/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(nbAbricotsJourG, 62.0, 831.0);
      ctx.restore();
    }

    function nbAbricotsCourant(ctx) {

      // nbAbricotsCourant/kmh
      ctx.save();
      ctx.font = "150.0px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(nbAbricotsCourantG, 818.0, 858.9);
      ctx.restore();
    }

    function nbPartie(ctx) {

      // nbPartie/kmh
      ctx.save();
      ctx.font = "62.0px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(nbPartieG, 63.0, 121.3);
      ctx.restore();
    }

    function time(ctx) {

      // time/kmh
      ctx.save();
      ctx.font = "62.0px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(timeG, 1110.1, 117.7); //timeG
      ctx.restore();
    }

    function warning(ctx) {

      // warning
      ctx.drawImage(document.getElementById("image2"), 455.5, 85.8);
    }

    function lkmInstant(ctx) {

      // lkmInstant/kmh
      ctx.save();
      ctx.font = "109.9px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(lkmInstantG, 134.3, 408.2);
      ctx.restore();
    }

    function lkmPic(ctx) {

      // lkmPic/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(lkmPicG, 62.6, 636.3);
      ctx.restore();
    }

    function lkmMoy(ctx) {

      // lkmMoy/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(lkmMoyG, 284.6, 636.3);
      ctx.restore();
    }

    function rkmInstant(ctx) {

      // rkmInstant/kmh
      ctx.save();
      ctx.font = "109.9px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(rkmInstantG, 977.5, 407.9);
      ctx.restore();
    }

    function rkmPic(ctx) {

      // rkmPic/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(rkmPicG, 796.5, 636.3);
      ctx.restore();
    }

    function rkmMoy(ctx) {

      // rkmMoy/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(rkmMoyG, 1018.5, 636.3);
      ctx.restore();
    }

    function ecartNo(ctx) {

      // ecartNo/kmh
      ctx.save();
      ctx.font = "109.9px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(ecartNoG, 612.5, 408.3);
      ctx.restore();
    }

    function ecartMano(ctx) {

      // ecartMano/Groupe
      ctx.save();

      // ecartMano/Groupe/Trac transparent
      ctx.save();
      ctx.beginPath();

      // ecartMano/Groupe/Trac transparent/Trac
      ctx.moveTo(639.7, 224.1);
      ctx.bezierCurveTo(552.8, 224.1, 482.3, 294.5, 482.3, 381.4);
      ctx.bezierCurveTo(482.3, 468.3, 552.8, 538.7, 639.7, 538.7);
      ctx.bezierCurveTo(726.5, 538.7, 797.0, 468.3, 797.0, 381.4);
      ctx.bezierCurveTo(797.0, 294.5, 726.5, 224.1, 639.7, 224.1);
      ctx.closePath();

      // ecartMano/Groupe/Trac transparent/Trac
      ctx.moveTo(639.7, 532.4);
      ctx.bezierCurveTo(556.2, 532.4, 488.6, 464.8, 488.6, 381.4);
      ctx.bezierCurveTo(488.6, 298.0, 556.2, 230.4, 639.7, 230.4);
      ctx.bezierCurveTo(723.1, 230.4, 790.7, 298.0, 790.7, 381.4);
      ctx.bezierCurveTo(790.7, 464.8, 723.1, 532.4, 639.7, 532.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fill();

      // ecartMano/Groupe/Groupe
ctx.save();
//  middleLedArray
 for(i=0; i<jaugeMiddle;i++){
           middleLedArray[i](ctx);
       }
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }

    function lMano(ctx) {

      // lMano/Groupe
      ctx.save();

      // lMano/Groupe/Trac transparent
      ctx.save();
      ctx.beginPath();

      // lMano/Groupe/Trac transparent/Trac
      ctx.moveTo(217.1, 224.4);
      ctx.bezierCurveTo(130.2, 224.4, 59.7, 294.8, 59.7, 381.7);
      ctx.bezierCurveTo(59.7, 468.6, 130.2, 539.0, 217.1, 539.0);
      ctx.bezierCurveTo(304.0, 539.0, 374.4, 468.6, 374.4, 381.7);
      ctx.bezierCurveTo(374.4, 294.8, 304.0, 224.4, 217.1, 224.4);
      ctx.closePath();

      // lMano/Groupe/Trac transparent/Trac
      ctx.moveTo(217.1, 532.7);
      ctx.bezierCurveTo(133.7, 532.7, 66.0, 465.1, 66.0, 381.7);
      ctx.bezierCurveTo(66.0, 298.3, 133.7, 230.7, 217.1, 230.7);
      ctx.bezierCurveTo(300.5, 230.7, 368.1, 298.3, 368.1, 381.7);
      ctx.bezierCurveTo(368.1, 465.1, 300.5, 532.7, 217.1, 532.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fill();

      // lMano/Groupe/Groupe

      // lMano/Groupe/Groupe/Trac // first
       ctx.save();
     
       for(i=0; i<jaugeLeft;i++){
           leftLedArray[i](ctx);
       }
    
//     
     
     ctx.restore();
      ctx.restore();
      ctx.restore();
  }

    function rMano(ctx) {

      // rMano/Groupe
      ctx.save();

      // rMano/Groupe/Trac transparent
      ctx.save();
      ctx.beginPath();

      // rMano/Groupe/Trac transparent/Trac
      ctx.moveTo(1060.3, 224.0);
      ctx.bezierCurveTo(973.4, 224.0, 903.0, 294.5, 903.0, 381.4);
      ctx.bezierCurveTo(903.0, 468.3, 973.4, 538.7, 1060.3, 538.7);
      ctx.bezierCurveTo(1147.2, 538.7, 1217.6, 468.3, 1217.6, 381.4);
      ctx.bezierCurveTo(1217.6, 294.5, 1147.2, 224.0, 1060.3, 224.0);
      ctx.closePath();

      // rMano/Groupe/Trac transparent/Trac
      ctx.moveTo(1060.3, 532.4);
      ctx.bezierCurveTo(976.9, 532.4, 909.3, 464.8, 909.3, 381.4);
      ctx.bezierCurveTo(909.3, 298.0, 976.9, 230.4, 1060.3, 230.4);
      ctx.bezierCurveTo(1143.7, 230.4, 1211.3, 298.0, 1211.3, 381.4);
      ctx.bezierCurveTo(1211.3, 464.8, 1143.7, 532.4, 1060.3, 532.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fill();

      // rMano/Groupe/Groupe

     
      ctx.save();
      
      for(i=0; i<jaugeRight;i++){
           rightLedArray[i](ctx);
       }
      
      // rightLedArray
      
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }