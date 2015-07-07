var connection;
function startWS(){
    

    // if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    connection = new WebSocket('ws://localhost:8100');

    connection.onopen = function () {
      
         connection.send('{"id":"browser", "type":"text", "content":"Browser ready."}' );
    };

    connection.onerror = function (error) {
        // an error occurred when sending/receiving data
    };

    connection.onmessage = function (message) {
        
        
      var object = JSON.parse(message.data);
        
        if(object.windSpeed){
            
            var wind = Math.round(parseFloat(object.windSpeed)*10)/10;
            
            if(object.id=="joueur1"){
                 kmL = wind;
            kmL1 = wind;
            each5secArrayL.push(kmL1);
            fullArrayL.push(kmL1);
             //------ Calcul zone FULL LEFT------/
    sumFullL = fullArrayL.reduce(function(a, b) { return a + b; });
    aveFullL = sumFullL/fullArrayL.length;
    aveFullL = Math.round(aveFullL*10)/10;
    picL = Math.max.apply(null, fullArrayL);
    localStorage.setItem("lkmMoy",aveFullL);
    localStorage.setItem("lkmPic",picL);
            localStorage.setItem("lkmInstant",kmL1);
            }else if (object.id=="joueur2"){
                 kmR = wind;
            kmR1 = wind;
            each5secArrayR.push(kmR1);
            fullArrayR.push(kmR1);
             //------- Calcul zone FULL RIGHT--------
    sumFullR = fullArrayR.reduce(function(a, b) { return a + b; });
    aveFullR = sumFullR/fullArrayR.length;
    aveFullR = Math.round(aveFullR*10)/10;
    picR= Math.max.apply(null, fullArrayR);
    localStorage.setItem("rkmPic",picR);
    localStorage.setItem("rkmMoy",aveFullR);
            localStorage.setItem("rkmInstant",kmR1);
            }
             if(kmL1 - kmR1!=0){
        
    
    ecart = Math.abs(kmL1 - kmR1);
    
    }else{
        ecart=0;
    }
    localStorage.setItem("ecartNo",ecart);
        }
   
        if(object.temperature){
            
            var temperature = Math.round(parseFloat(object.temperature)*10)/10;
           localStorage.setItem("temp",temperature);
           
            
        }
        if(object.pressure){
            
            var pression = Math.round(parseFloat(object.pressure)*10)/10;
            localStorage.setItem("pression",pression);
        }
        if(object.humidity){
           var humidite = Math.round(parseFloat(object.humidity)*10)/10;
           localStorage.setItem("humidite",humidite);
        }
        
       
    };
    }


