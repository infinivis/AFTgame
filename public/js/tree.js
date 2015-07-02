function initTree() {
    console.log("Init Tree");
    dessin = document.getElementById("canvas");
    dessin.context = dessin.getContext('2d');
    TREE = new Tree(60);
}

function Tree(framerate) {
    this.abricotArray = new Array;
    this.feuilleArray = new Array;
    this.maxNode = 2000;
    this.wind = 0;
    this.windMomentum = 0;
    this.timer = null;
    this.timerWind = null;
    this.timerAbricot = null;
    this.timerAbricotWake = null;
    this.timerFeuille = null;
    this.timerFeuilleWake = null;
    this.timerFleurs = null;
    this.timerFleursWake = null;
    this.frameRate = framerate;
    this.gamma = 0.86;
    this.tronc = new Array();
    this.tronc[0] = new NOEUD;
    this.tronc[1] = new NOEUD;
    this.tronc[1].parent = this.tronc[0];
    this.tronc[0].x = arbrePositionX;
    this.tronc[0].y = arbrePositionY;
    this.tronc[1].x = arbrePositionX;
    this.tronc[1].y = arbrePositionY - 10;

    this.wakeFleurs = function () {
        this.timerFleurs = setInterval($.proxy(this.runFleurs, this), 1);
    };
    this.createFleurs = function () {
        this.timerFleurs = setInterval($.proxy(this.newFleurs, this), 25);
    };

    this.stopFleurs = function () {
        clearInterval(this.timerFleurs);
       
    };
    this.wakeFeuille = function () {
        this.timerFeuilleWake = setInterval($.proxy(this.runFeuille, this), 1);
    };
    this.createFeuille = function () {
        this.timerFeuille = setInterval($.proxy(this.newFeuille, this), 1);
    };

    this.stopFeuille = function () {
        clearInterval(this.timerFeuille);
        clearInterval(this.timerFeuilleWake);
       
    };
  
    this.createAbricot = function () {
        this.timerAbricot = setInterval($.proxy(this.newAbricot, this), 1);
    };

    this.stopAbricot = function () {
        clearInterval(this.timerAbricot);
       
    };
     this.wakeAbricot = function () {
        this.timerAbricotWake = setInterval($.proxy(this.runAbricot, this), 1);
    };
     this.stopWakeAbricot = function () {
        clearInterval(this.timerAbricotWake);
       
    };

    this.startWind = function () {
        console.log("Start Wind");
        this.timerWind = setInterval($.proxy(this.armonicWind, this), 1);
    };
    this.stopWind = function () {
        clearInterval(this.timerWind);
    };
    this.startAutoGrow = function () {
        this.timer = setInterval($.proxy(this.grow, this), 1);
    };

    this.stopAutoGrow = function () {
        clearInterval(this.timer);
        };
    this.startUnGrow = function () {
        this.timer = setInterval($.proxy(this.unGrow, this), 1);
    };


    this.grow = function () {

        for (i in this.tronc) {
            
            if (this.tronc[i].left == null && Math.random() < 0.07) {
                
                this.add(Math.random() * 3, this.tronc[i]);
               
            }
        }
        this.recalculate(true);
    };
    this.unGrow = function () {
        for (i in this.tronc) {
            if (this.tronc[i].left !== null && Math.random() < 0.07) {
                this.substract(Math.random() * 3, this.tronc[i]);
                //console.log(this.tronc.length);
            }
        }
        this.recalculate(true);
    };



    this.add = function (x, noeud) {
        
        while (noeud.parent != null) {
            noeud.length += x; // 
            noeud = noeud.parent;
        }
        noeud.length += x;
    };

    this.substract = function (x, noeud) {
        while (noeud.parent != null) {
            noeud.length -= x;
            noeud = noeud.parent;
        }       
        noeud.length -= x;             
    };

    this.recalculate = function (grow) {
        
        //do not add node if tree is allready at full size
        if (grow && this.tronc.length < this.maxNode) {
            for (x in this.tronc) {
                if (this.tronc[x].parent != null && this.tronc[x].length > 10 && this.tronc[x].left == null) {
                    this.tronc[x].left = new NOEUD;
                    this.tronc[x].right = new NOEUD;
                    this.tronc[x].left.length = Math.floor(Math.random() * (this.tronc[x].length - 2)) + 1;
                    this.tronc[x].right.length = this.tronc[x].length - this.tronc[x].left.length;
                    this.tronc[x].left.parent = this.tronc[x];
                    this.tronc[x].right.parent = this.tronc[x];
                    this.tronc.push(this.tronc[x].left);
                    this.tronc.push(this.tronc[x].right);
                }
            }
        }
        
        var stack = new Array;
        stack.push(this.tronc[1]);
        while (stack.length > 0) {
            var current = stack.pop();
            
            if (current.left != null) {
                current.feuille = null;
                this.recalculateNode(current, current.left, true);
                stack.push(current.left);
                this.recalculateNode(current, current.right, false);
                stack.push(current.right);
           }else if (current.feuille == null) {
                current.feuille = new FEUILLE;
                        current.feuille.size = current.length/2;
//                        current.feuille.x =  current.x;
//                        current.feuille.y =  current.y;
                       
            }
           
                if(current.fleurs != null){
        if(current.fleurs.accroche){
            if(current.fleurs.dureeVie>200){
              
            current.abricot = new ABRICOT;
            current.abricot.x = current.fleurs.x
            current.abricot.y = current.fleurs.y
            current.abricot.size = current.fleurs.size
            current.fleurs = null;
        }else{
            current.fleurs.dureeVie += 1;
            current.fleurs.x =current.x;
            current.fleurs.y =current.y;
            } 
        }
       }
       
      
         if(current.abricot != null){
        if(current.abricot.accroche){
            current.abricot.x =current.x;
            current.abricot.y =current.y;
            } 
        }
       
           
//            else if (current.left == null && current.feuille == null && this.tronc.length > this.maxNode) { //fonctionne bien mais on doit attendre que l'arbre ne crée plus de noeud
//                current.feuille = new FEUILLE;
//                        current.feuille.size = current.length/2;
////                        current.feuille.x =  current.x;
////                        current.feuille.y =  current.y;
//                       
//            }
        }
       

    };


    this.recalculateNode = function (current, child, isLeft) {
        var angle = Math.atan2(current.parent.y - current.y, current.x - current.parent.x);

        var temp = this.gamma * (current.length - child.length) / current.length;
        angle += isLeft ? temp : -temp;
        if (Math.abs(angle) > Math.PI / 2) {
            angle += (Math.PI - Math.abs(angle)) * angle / Math.abs(angle) * this.wind;
        } else {
            angle += angle * this.wind;
        }
        var len = 1;
        if (child.left != null) {
            len = Math.sqrt(2 * (child.left.length * child.right.length) / (child.left.length + child.right.length));
        }
        child.x = current.x + len * Math.cos(angle);
        child.y = current.y - len * Math.sin(angle);
    };
// kmR kmL
    this.armonicWind = function () {
        var tempWind;
        
        if (Math.abs(oldKmL - oldKmR) == 0) {
            oldWind = 0;
        } else {
            oldWind = (oldKmL / oldKmR / Math.abs(oldKmL - oldKmR) / 10);        
        }
        if (Math.abs(kmL - kmR) == 0) {
            newWind = 0;
        } else {
            newWind = (kmL / kmR / Math.abs(kmL - kmR) / 10);          
        }        
        tempWind = (kmL / kmR / Math.abs(kmL - kmR) / 10);        
        //tempWind = Math.abs(newWind - oldWind)/10;
        //console.log(tempWind);
        
        if (Math.abs(kmL - kmR) !== 0 && kmL > kmR) {                        
            myWind = -tempWind;
        } else if ((Math.abs(kmL - kmR) !== 0 && kmR > kmL)) {           
            myWind = tempWind;
        }      
        //myWind /= 5;
        //myWind -= (myWind - (Math.random() - 1 / 2)) * 0.0008 * Math.random();
        //this.windMomentum -= (myWind - (Math.random() - 1 / 2)) * 0.0008 * Math.random();
        //myWind += this.windMomentum;
        //this.windMomentum *= 0.997;

        this.wind = myWind;                                                
        this.recalculate(false);
//        this.windMomentum -= (this.wind - (Math.random() - 1 / 2)) * 0.0008 * Math.random();
//        this.wind += this.windMomentum;                
    };
//    this.armonicWind = function () {
//        this.windMomentum -= (this.wind - (myWind - 1 / 2)) * 0.0008 *myWind;
//        this.wind += this.windMomentum;
//        this.windMomentum *= 0.997;
//        console.log(this.wind);
//    };
//    this.armonicWind = function () {
//        this.windMomentum -= (this.wind - (Math.random() - 1 / 2)) * 0.0008 * Math.random();
//        this.wind += this.windMomentum;
//        this.windMomentum *= 0.997;
//        console.log(this.wind);
//    };
    this.runFleurs = function () {        
        for (i in this.tronc) {
            if(this.tronc[i].fleurs != null && !this.tronc[i].fleurs.accroche ){
            this.tronc[i].fleurs.momx += -this.wind * 3;
            this.tronc[i].fleurs.momy += (- 6 / 13) * 40 * Math.abs(this.wind);
            this.tronc[i].fleurs.x += this.tronc[i].fleurs.momx - this.wind * 30;
            this.tronc[i].fleurs.y += this.tronc[i].fleurs.momy;
         
            if (this.tronc[i].fleurs.y > widthFull) {
                this.tronc[i].fleurs = null;
            }
        }
        }
    };
    this.decrocheFleurs = function () {        
        for (i in this.tronc) {
            if(this.tronc[i].fleurs != null){
                if(Math.random()<proportion ){
            this.tronc[i].fleurs.accroche = false;
        }
        //ci-desosus trop symétrique et une fois que c'est fait il ne le fait plus les mêmes
//                if(i%fraction==0 ){
//            this.tronc[i].feuille.accroche = false;
//        }
        }
        }
    };
      this.newFleurs = function () {
          
          if (Math.random() > 0.7) {
            var random = Math.floor(Math.random() * this.tronc.length)
         if(this.tronc[random].fleurs == null){
            var temp = this.tronc[random];
            temp.fleurs = new FLEURS;
            temp.fleurs.size = Math.random() * 10;
            temp.fleurs.x = temp.x;
            temp.fleurs.y = temp.y;
            temp.fleurs.accroche = true;
            this.tronc[random] = temp;
            
         }
        }
       //this.recalculate(false);
    };
    
    this.runFeuille = function () {        
        for (i in this.tronc) {
            if(this.tronc[i].feuille != null && !this.tronc[i].feuille.accroche ){
            this.tronc[i].feuille.momx += -this.wind * 3;
            this.tronc[i].feuille.momy += (- 6 / 13) * 40 * Math.abs(this.wind);
            this.tronc[i].feuille.x += this.tronc[i].feuille.momx - this.wind * 30;
            this.tronc[i].feuille.y += this.tronc[i].feuille.momy;
         
            if (this.tronc[i].feuille.y > widthFull) {
                this.tronc[i].feuille = null;
            }
        }
        }
    };
    this.decrocheFeuille = function () {        
        for (i in this.tronc) {
           
            if(this.tronc[i].feuille != null){
                if(Math.random()<proportion ){
                
            this.tronc[i].feuille.accroche = false;
            //this.tronc[i].feuille = null;
        }
        //ci-desosus trop symétrique et une fois que c'est fait il ne le fait plus les mêmes
//                if(i%fraction==0 ){
//            this.tronc[i].feuille.accroche = false;
//        }
        }
        }
    };
      this.newFeuille = function () {
          for (x in this.tronc) {
             
        if (this.tronc[x].left == null && this.tronc[x]!=this.tronc[0]){
                       this.tronc[x].feuille = null;
                        this.tronc[x].feuille =  new FEUILLE;
                        this.tronc[x].feuille.size = this.tronc[x].length/3
                        this.tronc[x].feuille.x =  this.tronc[x].x;
                        this.tronc[x].feuille.y =  this.tronc[x].y;
                        
                        
//                        var feuille = new FEUILLE;
//                        feuille.size = this.tronc[x].length/3
//                        feuille.x =  this.tronc[x].x;
//                        feuille.y =  this.tronc[x].y;
//                        this.tronc[x].feuille = feuille;
                    }
                           }
                           this.recalculate(true);

       
    };
    this.runAbricot = function () {        
        for (i in this.abricotArray) {
            this.abricotArray[i].momx += -this.wind * 3;
            this.abricotArray[i].momy += (- 6 / 13) * 40 * Math.abs(this.wind);
            this.abricotArray[i].x += this.abricotArray[i].momx - this.wind * 30;
            this.abricotArray[i].y += this.abricotArray[i].momy;
//            this.abricotArray[i].x += 1;
//            this.abricotArray[i].y += 0.01;
            if (this.abricotArray[i].y > widthFull) {
                this.abricotArray.splice(i, 1);
            }
        }
    };
//    this.runAbricot = function () {
//        for (i in this.abricotArray) {
//            this.abricotArray[i].momx += -this.wind * 3 * Math.random();
//            this.abricotArray[i].momy += (Math.random() - 6 / 13) * 40 * Math.abs(this.wind);
//            this.abricotArray[i].x += this.abricotArray[i].momx - this.wind * 30 * (Math.random() + 1);
//            this.abricotArray[i].y += this.abricotArray[i].momy;
//            if (this.abricotArray[i].y > 600) {
//                this.abricotArray.splice(i, 1);
//            }
//        }
//    };

    this.newAbricot = function () {
        
        if (Math.random() > 0.5) {
            var random = Math.floor(Math.random() * this.tronc.length)
            //if (this.tronc[random].length > 10 && this.tronc[random].length < 30) {
            //if (this.tronc[random].length > 10) {
            var temp = this.tronc[random];
            temp.abricot = new ABRICOT;
            temp.abricot.size = Math.random() * 10;
            temp.abricot.x = temp.x;
            temp.abricot.y = temp.y;
            this.tronc[random] = temp;
            
        //}
        }
    };
//    this.newAbricot = function () {
//        
//        if (Math.random() > 0.5) {
//            var random = Math.floor(Math.random() * this.tronc.length)
//            //if (this.tronc[random].length > 10 && this.tronc[random].length < 30) {
//            //if (this.tronc[random].length > 10) {
//                
//            var temp = this.tronc[random];
//            var abricot = new ABRICOT;
//            abricot.size = Math.random() * 10;
//            abricot.x = temp.x;
//            abricot.y = temp.y;
//            this.abricotArray.push(abricot);
//        //}
//        }
//    };
  

}
//                var debri_gen=null;
//		setTimeout("debri_gen=setInterval(new_debri,30);",2000);
//		setInterval(run_debri,30);