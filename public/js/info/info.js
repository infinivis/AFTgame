   // Main canvas and context references
    var canvas;
    var ctx;

    // Frames per second
    

function initInfo() {

      canvas = document.getElementById("canvasInfo");
      ctx = canvas.getContext("2d");
      setInterval(drawFrame, 16);
      }
      
    function drawFrame(){
         fond(ctx);
         
         
if(delay===true){
    
    if(estCasse){
        effetCasse();
    }else{  
    }
    
    if(ecartFloat<=2 && ecartFloat<tolMoyen && rkmInstantG<limiteMaxRouge &&  rkmInstantG!=0 &&lkmInstantG != 0){
        souffleDifferent0 = true;
       ecartColor =  "rgb(111, 183, 100)"; //vert
       warningG = false;
    }else if (ecartFloat>tolMoyen || lkmInstantG>=limiteMaxRouge && rkmInstantG>=limiteMaxRouge){
        souffleDifferent0 = true;
        if(lkmInstantG>=limiteMaxRouge && rkmInstantG>=limiteMaxRouge){
            ecartFloat = " ";
        }
        ecartColor = "rgb(202, 100, 101)";
        warningG = true;
    }else if (rkmInstantG==0 && lkmInstantG==0 ){
        souffleDifferent0 = false;
      
    }else{
        souffleDifferent0 = true;
        ecartColor = "rgb(112, 97, 166)";
    }
    
    if(lkmInstantG>=limiteMaxRouge){
        leftColor = "rgb(202, 100, 101)";
        warningG = true;
    }else if (lkmInstantG>=limiteMinVert && lkmInstantG<= limiteMaxVert){
        leftColor = "rgb(111, 183, 100)";
    }else{
        leftColor = "rgb(112, 97, 166)";
    }
    if(rkmInstantG>=limiteMaxRouge){
        rightColor = "rgb(202, 100, 101)";
        warningG = true;
    }else if (rkmInstantG>=limiteMinVert && rkmInstantG<= limiteMaxVert){
        rightColor = "rgb(111, 183, 100)";
    }else{
        rightColor = "rgb(112, 97, 166)";
    }
   
        pression(ctx);

      humidite(ctx);

      temp(ctx);

      nbAbricotsSemaine(ctx);

      nbAbricotsJour(ctx);

      nbAbricot1(ctx);
      nbAbricot2(ctx);
      nbAbricot3(ctx);
      nbAbricot4(ctx);
      nbAbricot5(ctx);
      nbAbricot6(ctx);
      nbAbricot7(ctx);

      nbPartie(ctx);

      time(ctx);
      
      if(warningG){
         warning(ctx); 
      }

      

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
// gros chiffre

    function nbAbricot1(ctx) {
        if(nbAbricotsArray[0]==1){
       numberPositionif5 = 46.4;
   }else{
       numberPositionif5 = 0;
   }

      // nbAbricot5/kmh
      ctx.save();
      ctx.font = "150.0px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(nbAbricotsArray[0], 393+numberPositionif5, 858.9);
      ctx.restore();
    }
    function nbAbricot2(ctx) {
        if(nbAbricotsArray[1]==1){
       numberPositionif5 = 46.4;
   }else{
       numberPositionif5 = 0;
   }

      // nbAbricot5/kmh
      ctx.save();
      ctx.font = "150.0px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(nbAbricotsArray[1], 464+numberPositionif5, 858.9);
      ctx.restore();
    }
    function nbAbricot3(ctx) {
        if(nbAbricotsArray[2]==1){
       numberPositionif5 = 46.4;
   }else{
       numberPositionif5 = 0;
   }

      // nbAbricot5/kmh
      ctx.save();
      ctx.font = "150.0px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(nbAbricotsArray[2], 534.8+numberPositionif5, 858.9);
      ctx.restore();
    }

    function nbAbricot4(ctx) {
        if(nbAbricotsArray[3]==1){
       numberPositionif4 = 46.4;
   }else{
       numberPositionif4 = 0;
   }

      // nbAbricot4/kmh
      ctx.save();
      ctx.font = "150.0px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(nbAbricotsArray[3], 605.5+numberPositionif4, 858.9);
      ctx.restore();
    }

    function nbAbricot5(ctx) {
        if(nbAbricotsArray[4]==1){
       numberPositionif3 = 46.4;
   }else{
       numberPositionif3 = 0;
   }

      // nbAbricot3/kmh
      ctx.save();
      ctx.font = "150.0px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(nbAbricotsArray[4], 676.0+numberPositionif3, 858.9);
      ctx.restore();
    }

    function nbAbricot6(ctx) {
        if(nbAbricotsArray[5]==1){
       numberPositionif2 = 46.4;
   }else{
       numberPositionif2 = 0;
   }

      // nbAbricot2/kmh
      ctx.save();
      ctx.font = "150.0px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(nbAbricotsArray[5], 747.0+numberPositionif2, 858.9);
      ctx.restore();
    }
     function nbAbricot7(ctx) {
if(nbAbricotsArray[6]==1){
       numberPositionif1 = 46.4;
   }else{
       numberPositionif1 = 0;
   }
      // nbAbricot1/kmh
      ctx.save();
      ctx.font = "150.0px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(nbAbricotsArray[6], 818.0+numberPositionif1, 858.9);
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
      ctx.fillStyle = leftColor;
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
      ctx.fillStyle = rightColor;
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
if(souffleDifferent0){
     // ecartNo/kmh
      ctx.save();
      ctx.font = "109.9px 'Digital-7'";
      ctx.fillStyle = ecartColor;
      ctx.fillText(ecartFloat, 612.5, 408.3);
      ctx.restore();
}
     
    }

    function ecartMano(ctx) {
if(souffleDifferent0){
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
      ctx.fillStyle = ecartColor;
      ctx.fill();

      // ecartMano/Groupe/Groupe
ctx.save();
//  middleLedArray
if(ecartFloat<50){
   
   for(i=middleLedArray.length; i>ecartFloat;i--){
       
         middleLedArray[i-1](ctx);
     
       }
}
 
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
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
      ctx.fillStyle = leftColor;
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
      ctx.fillStyle = rightColor;
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
    
    
    
    
    
    
    var effetCasse = setTimeout(function(){
        pression(ctx);

      humidite(ctx);

      temp(ctx);

      nbAbricotsSemaine(ctx);

      nbAbricotsJour(ctx);

     nbAbricot1(ctx);
      nbAbricot2(ctx);
      nbAbricot3(ctx);
      nbAbricot4(ctx);
      nbAbricot5(ctx);

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
    },500);