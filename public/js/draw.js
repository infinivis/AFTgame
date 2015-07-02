function draw() {
    
    var img = document.getElementById("fondImg");
    var pat = dessin.context.createPattern(img, "repeat");
    dessin.context.fillStyle = pat;
    //widthFull
    //heightFull
    dessin.context.fill();
    dessin.context.fillRect(0, 0, 1920 , 1080);
   
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
        dessin.context.lineWidth = Math.sqrt(TREE.tronc[x].length) * 0.12;
        dessin.context.lineCap = "square";
        dessin.context.stroke();
    }  
    
   
     // feuille test draw object = fonctionnel!!!
     if(TREE.tronc.length > 2){ // protection bug
    for (x in TREE.tronc) {
      if(TREE.tronc[x].feuille != null){
          dessin.context.fillStyle = TREE.tronc[x].feuille.color;
          if(TREE.tronc[x].feuille.accroche){
            TREE.tronc[x].feuille.x = TREE.tronc[x].x;
            TREE.tronc[x].feuille.y = TREE.tronc[x].y;
            }
                
            dessin.context.beginPath();
            
            //                    OU                                      Quelle taille
            dessin.context.arc(TREE.tronc[x].feuille.x, TREE.tronc[x].feuille.y, TREE.tronc[x].feuille.size, 0, Math.PI, true); //juste
            //dessin.context.arc(TREE.tronc[x].x, TREE.tronc[x].y, TREE.tronc[x].length/100, 0, Math.PI, true);
            //dessin.context.arc(TREE.tronc[x].x,TREE.tronc[x].y, TREE.tronc[x].length/5, 0, Math.PI*2, true);
//            dessin.context.lineWidth = 1;
            // line color
            dessin.context.strokeStyle = TREE.tronc[x].feuille.borderColor;
            dessin.context.stroke();
            dessin.context.closePath();
            dessin.context.fill();
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
    }
    
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
}