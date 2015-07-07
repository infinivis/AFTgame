function harmonicBreath(){
    // if something tree < x
    var count = 3;//count en seconde
    growTREEwithtimer(count);
    TREE.maxNode += 200;
}
function badBreath(){
    
}

function veryBadBreath(){
    console.log("VeryBadBreath");
    var count = 1;
    TREE.stopWakeFeuille();
    TREE.stopWakeFleurs(); //attention seulement si arbre existant
    TREE.stopWakeAbricot(); //ne pas oublier les clearInterval au bons endroits et dans gameCompletion
    TREE.wakeFeuille();
    TREE.wakeFleurs(); //attention seulement si arbre existant
    TREE.wakeAbricot(); //ne pas oublier les clearInterval au bons endroits et dans gameCompletion
    TREE.decrocheFeuille(); //ajouter des paramètres de combien décrocher
    TREE.decrocheFleurs();
    TREE.decrocheAbricot();
    unGrowTREEwithtimer(count); //count en seconde
    
}

function growTREEwithtimer(count){
    TREE.stopAutoGrow();
    TREE.startAutoGrow();
     var count2 = count;
    counterGrow = setInterval(timer, 1000); //1000 will  run it every 1 second
    
    function timer()
    {
        count2 = count2 - 1;
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

function unGrowTREEwithtimer(count){
    TREE.stopAutoGrow();
    TREE.startUnGrow();
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
        console.log(""+count);
        
    }
}