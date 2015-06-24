//////////////////////websocket section /////////////////

var WebSocketServer = require("ws").Server;
var fs = require("fs");

var ws = new WebSocketServer( { port: 8100 } );

console.log("Websocket Server started... on port 8100");

  


ws.on('connection', function (client) {
    
//    ws.broadcast = function broadcast(data) {
//        ws.clients.forEach(function each(client) {
//            client.send(data);
//        });
//    };
    
  
  console.log("Connection open");
  
  client.on('message', function incoming(data) {
  //ws.send('something');
//  var data = data;
//   console.log("Message");
//   console.log(data);
//  
      console.log(data);
      var object = JSON.parse(data);
      console.log(object);
      if(object.id==="browser"){
          console.log("Browser envoit qqch ---------");
          console.log(object.content);
            
      }else{          
          console.log("Android envoit qqch ---------");
         //console.log(object.windSpeed);  
                 ws.clients.forEach(function each(clientCurrent) {
            if(clientCurrent!=client){
                //clientCurrent.send(object.windSpeed);
                clientCurrent.send(object.id);
            }else{
                
            }
            
        });
           
      }
     
    });
    
       client.on('close', function() {
        console.log("Browser gone.")
    });
  
});