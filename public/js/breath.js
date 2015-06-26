function harmonicBreath(){
    growTREEwithtimer();
    TREE.maxNode += 200;
}
function badBreath(){
    
}

function veryBadBreath(){
    unGrowTREEwithtimer();
}

function growTREEwithtimer(){
    TREE.startAutoGrow();
    
     var count = growDuration;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
    
    function timer()
    {
        count = count - 1;
        if (count <= 0)
        {
            clearInterval(counter);
            TREE.stopAutoGrow();
            //counter ended, do something here
            
            count = growDuration;
          
            return;
        }

        //Do code for showing the number of seconds here
        console.log(""+count);
        
    }
}

function unGrowTREEwithtimer(){
    TREE.startUnGrow();
    
     var count = unGrowDuration;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
    
    function timer()
    {
        count = count - 1;
        if (count <= 0)
        {
            clearInterval(counter);
            TREE.stopAutoGrow();
            //counter ended, do something here
            
            count = unGrowDuration;
          
            return;
        }

        //Do code for showing the number of seconds here
        console.log(""+count);
        
    }
}