var cw,ch;
var x=0;
var eWidth=100;

var img1=new Image();
var img=new Image();
img.onload=start;
img.src="https://dl.dropboxusercontent.com/u/139992952/multple/sailboat.png";
function start(){

  cw=canvas.width=img.width;
  ch=canvas.height=img.height;

  img1.onload=function(){
    requestAnimationFrame(animate);
  };
  img1.src="https://dl.dropboxusercontent.com/u/139992952/multple/sailboat1.png";

}

function drawTest() {
  var canvas = document.getElementById("canvasTest");
$('#canvasTest').attr({width: $(window).width(), height: $(window).height()});
  var ceFameuxContext = canvas.getContext("2d");


var opts = {
  distance : 100,
  lineWidth : 3,
  gridColor  : "#220",
  caption : false
};
new Grid(opts).draw(ceFameuxContext);

//  ceFameuxContext.fillStyle = "red";
//
//  ceFameuxContext.beginPath();
//  ceFameuxContext.moveTo(30, 30);
//  ceFameuxContext.lineTo(150, 150);
//  ceFameuxContext.bezierCurveTo(60, 70, 100, 70, 60, 70);
//  ceFameuxContext.lineTo(30, 30);
//  ceFameuxContext.fill();


 // create gradient
  gradient = ceFameuxContext.createLinearGradient(x-eWidth,0, x,0);
  gradient.addColorStop(0, "rgba(0,0,0, 0)");
  gradient.addColorStop(1, "rgba(0,0,0, 1)");

  // save the unaltered canvas context
  ceFameuxContext.save();

  // clear the canvas
  ceFameuxContext.clearRect(0,0,cw,ch);
  
  // gradient zone
  ceFameuxContext.fillStyle = gradient;
  ceFameuxContext.fillRect(x-eWidth,0,eWidth,ch);

  // fully original right of x
  ceFameuxContext.fillStyle='black';
  ceFameuxContext.fillRect(x,0,cw,ch);

  // original image with gradient "dissolve" on left

  // set compositing to source-in
  ceFameuxContext.globalCompositeOperation='source-in';
  ceFameuxContext.drawImage(img,0,0);

  // revealed image 
  ceFameuxContext.globalCompositeOperation='destination-over';
  ceFameuxContext.drawImage(img1,0,0);

  // restore the context to its unaltered state
  ceFameuxContext.restore();
}
  
  function animate() {
  if (x<cw+eWidth){ requestAnimationFrame(animate); }
  x+=5;
  draw();
}

$('#date').click(function(){
  x=0;
  requestAnimationFrame(animate);    
});

drawTest();


