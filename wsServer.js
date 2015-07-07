//////////////////////websocket section /////////////////

var WebSocketServer = require("ws").Server;
var fs = require("fs");

var ws = new WebSocketServer( { port: 8100 } );

console.log("Websocket Server started... on port 8100");

  var browser;


ws.on('connection', function (client) {
    
//    ws.broadcast = function broadcast(data) {
//        ws.clients.forEach(function each(client) {
//            client.send(data);
//        });
//    };
    
  
  console.log("Connection open");
  
  client.on('message', function incoming(data) {




      console.log(data);
      var object = JSON.parse(data);
      console.log(object);
      
      
      if(object.id==="browser"){
          console.log("Browser envoit qqch ---------");
          console.log(object.content);
          browser = client;
           
            
      }else{          
          console.log("Android envoit qqch ---------");
         
           browser.send(data);
           
      }
     
    });
    
       client.on('close', function() {
        console.log("Browser gone.")
    });
  
});