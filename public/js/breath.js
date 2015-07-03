function harmonicBreath(){
    // if something tree < x
    var count = 3;//count en seconde
    growTREEwithtimer(count);
    TREE.maxNode += 200;
}
function badBreath(){
    
}

function veryBadBreath(){
    var count = 500; //count en milliséconde
    TREE.decrocheFeuille; //ajouter des paramètres de combien décrocher
    TREE.decrocheFleurs;
    TREE.decrocheAbricot;
    setTimeout(unGrowTREEwithtimer(count), 500); //count en seconde
    
}

function growTREEwithtimer(count){
    TREE.startAutoGrow();
    
     var count2 = count;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
    
    function timer()
    {
        count2 = count2 - 1;
        if (count2 <= 0)
        {
            clearInterval(counter);
            TREE.stopAutoGrow();
            //counter ended, do something here
            
            count2 = count;
          
            return;
        }

        //Do code for showing the number of seconds here
        console.log(""+count2);
        
    }
}

function unGrowTREEwithtimer(count){
    TREE.startUnGrow();
    
     var count2 = count;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
    
    function timer()
    {
        count2 = count2 - 1;
        if (count2 <= 0)
        {
            clearInterval(counter);
            TREE.stopAutoGrow();
            //counter ended, do something here
            
            count2 = count;
          
            return;
        }

        //Do code for showing the number of seconds here
        console.log(""+count);
        
    }
}