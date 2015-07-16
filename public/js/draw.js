function draw() {
    
    
    
     dessin.context.drawImage(imgFond,0,0,1920,1080);
    
//    var pat = dessin.context.createPattern(img, "repeat");
//    
//    
//    dessin.context.fillStyle = pat;
//       dessin.context.fill();
//    dessin.context.fillRect(0, 0, 1920 , 1080);
    
   
    if(TREE!=null){
        
     
   
    dessin.context.strokeStyle = troncColor;
    dessin.context.save();
dessin.context.translate(-200, -270);
dessin.context.scale(1.5, 1.5);
dessin.context.translate(0, -60);
        
   
    
   //dessin de l'arbre
      for (x = 2; x < TREE.tronc.length; x++) {
        dessin.context.beginPath();
        dessin.context.moveTo(TREE.tronc[x].x, TREE.tronc[x].y);
        dessin.context.quadraticCurveTo(TREE.tronc[x].parent.x, TREE.tronc[x].parent.y, TREE.tronc[x].parent.parent.x, TREE.tronc[x].parent.parent.y);
        dessin.context.moveTo(TREE.tronc[x].parent.parent.x, TREE.tronc[x].parent.parent.y);
        dessin.context.closePath();
        //dessin.context.lineWidth = Math.sqrt(TREE.tronc[x].length) * 0.12;
        dessin.context.lineWidth = Math.sqrt(TREE.tronc[x].length) * 0.17;
        dessin.context.lineCap = "square";
        dessin.context.stroke();
    }  
    
   
     // feuille test draw object = fonctionnel!!!
     
     if(TREE.tronc.length >= 2){ // protection bug
    for (x in TREE.tronc) {
      if(TREE.tronc[x].feuille != null){
          dessin.context.fillStyle = TREE.tronc[x].feuille.color;
          if(TREE.tronc[x].feuille.accroche){
            TREE.tronc[x].feuille.x = TREE.tronc[x].x;
            TREE.tronc[x].feuille.y = TREE.tronc[x].y;
            //TREE.tronc[x].feuille.size = TREE.tronc[x].length/3.5;
            }
                
            var xTemp = TREE.tronc[x].feuille.x;
      var yTemp = TREE.tronc[x].feuille.y;
      var sizeTemp = TREE.tronc[x].feuille.size*ratioSize;
      var rotation = TREE.tronc[x].feuille.rotation;
      
      // feuille/Trac
    dessin.context.save();
   
      dessin.context.beginPath();
      var z=2
       dessin.context.translate(xTemp,yTemp);
       
    dessin.context.rotate( -rotation*rotationVent );
    dessin.context.scale(sizeTemp,sizeTemp );
 
   dessin.context.translate(-xTemp,-yTemp);
   
      dessin.context.moveTo(xTemp, yTemp);
                        
      dessin.context.bezierCurveTo(xTemp+0.4, yTemp-0.1, xTemp+0.7, yTemp+0.1, xTemp+1.1, yTemp+0.2);
      dessin.context.bezierCurveTo(xTemp+1.4, yTemp+0.3, xTemp+1.7, yTemp+0.3, xTemp+2, yTemp+0.3);
      dessin.context.bezierCurveTo(xTemp+2.5, yTemp+0.4, xTemp+3, yTemp+0.3, xTemp+3.4, yTemp+0.1);
      dessin.context.bezierCurveTo(xTemp+4.2, yTemp-0.2, xTemp+4.7, yTemp-0.8, xTemp+4.9, yTemp-1.7);
      dessin.context.bezierCurveTo(xTemp+5.1, yTemp-2.7, xTemp+5.2, yTemp-3.7, xTemp+5.2, yTemp-4.8);
      dessin.context.bezierCurveTo(xTemp+5.2, yTemp-4.8, xTemp+3.3, yTemp-4.8, xTemp+3.2, yTemp-4.8);
      dessin.context.bezierCurveTo(xTemp+2.5, yTemp-4.8, xTemp+1.7, yTemp-4.7, xTemp+1.1, yTemp-4.5);
      dessin.context.bezierCurveTo(xTemp+0.1, yTemp-4.1, xTemp-0.3, yTemp-3.2, xTemp-0.3, yTemp-2.2);
      dessin.context.bezierCurveTo(xTemp-0.3, yTemp-1.8, xTemp-0.3, yTemp-1.5, xTemp-0.2, yTemp-1.2);
      dessin.context.bezierCurveTo(xTemp-0.2, yTemp-1.1, xTemp, yTemp, xTemp, yTemp);
      
      dessin.context.closePath();
      dessin.context.fillStyle = "rgb(0, 101, 0)";
      dessin.context.fill();
      dessin.context.strokeStyle = TREE.tronc[x].feuille.borderColor;//"rgb(0, 50, 0)";//TREE.tronc[x].feuille.borderColor;
            dessin.context.stroke();
      dessin.context.lineWidth = 1;
     
       dessin.context.restore();
        
//            dessin.context.lineWidth = 1;
            // line color
            dessin.context.strokeStyle = "rgb(0, 101, 0)";//TREE.tronc[x].feuille.borderColor;
            dessin.context.stroke();
            dessin.context.closePath();
            dessin.context.fill();
        }
        }
}
    
///end feuille

// fleurs
    for (i in TREE.tronc) {
         if(TREE.tronc[i].fleurs != null){
        dessin.context.beginPath();
        
        dessin.context.drawImage(document.getElementById("fleurs"), TREE.tronc[i].fleurs.x, TREE.tronc[i].fleurs.y, TREE.tronc[i].fleurs.size*2, TREE.tronc[i].fleurs.size*2);
   
        dessin.context.closePath();
    }
    }
    //end fleurs


// abricots

    for (i in TREE.tronc) {
        
         if(TREE.tronc[i].abricot != null){
          
        dessin.context.beginPath();
        dessin.context.drawImage(document.getElementById("abricot"), TREE.tronc[i].abricot.x, TREE.tronc[i].abricot.y, TREE.tronc[i].abricot.size*2, TREE.tronc[i].abricot.size*2);
        dessin.context.closePath();

        
    }else{
       
    }
    }
    
    //end abricots
    
    
//// abricots
//    dessin.context.fillStyle = "orange";
//    for (i in TREE.abricotArray) {
//         if (TREE.tronc[i].length < 10) {
//        dessin.context.beginPath();
//        // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
//        dessin.context.drawImage(document.getElementById("abricot"), TREE.abricotArray[i].x, TREE.abricotArray[i].y, TREE.abricotArray[i].size*2, TREE.abricotArray[i].size*2);
//        //dessin.context.arc(TREE.abricotArray[i].x, TREE.abricotArray[i].y, TREE.abricotArray[i].size, 0, Math.PI * 2, true);
//        //dessin.context.arc(TREE.abricotArray[i].x, TREE.abricotArray[i].y, TREE.abricotArray[i].size / 5, 0, Math.PI * 2, true);
//        dessin.context.closePath();
////        dessin.context.fill();
//        }//end if
//    }
//    //end abricots
    
     dessin.context.restore();
    // rideau
    
        
      
   
   }//end if TREE!=null
   
     dessin.context.drawImage(document.getElementById("rideau"), 0, posRideauY, dessin.width, dessin.height);
    if (!Rideauferme) {
        if (posRideauY <= 0 && posRideauY > 1000 * (-1)) {
            posRideauY -= 100;
        }
    }

    if (Rideauferme) {

        if (posRideauY >= 1000 * (-1) && posRideauY < 0) {
            posRideauY += 100;
        }
    }
  
   
}//end Draw