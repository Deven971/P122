x = 0;
y = 0;

draw_apple ="" ;

apple = "";

to_number = Number(content);


if(Number.isInteger(to_number))
{
  document.getElementById("status").innerHTML = to_number + "Start Drawing Apple";
  draw_apple = "set";
}
else
{
  document.getElementById("status").innerHTML = to_number + "The speech has not recognized a number"; 
}


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();


function preload()
{
   apple = loadImage('apple.png');
}


function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  canvas = createCanvas(900, 600);
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
}

function draw() {
  for(var i = 1; i <= to_number; i++)
  {
    x = Math.floor(Math.Random()*700);
    y = Math.floor(Math.Random()*400);
    image(apple, x, y, 50, 50);
  }
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
  speak();
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
