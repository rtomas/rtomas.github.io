var capture, espada, doble;
var start, startTime, limpio;
var colorBackground;
var px,py,radius = 300.0;
var px2,py2;
var frequency, angle = 0.0;

var widthCamera, heightCamera;

function setup() {
	createCanvas(windowWidth, windowHeight);
	capture = createCapture(VIDEO);
	capture.size(320, 240);
	capture.hide();
	start = false;
	limpio = false;
	frequency = 0.7;

	espada = loadImage("data/espada2.png"); 
	doble = loadImage("data/doblefelicidad.png"); 
	colorBackground = color(255);

	heightCamera = width*240/320;
	widthCamera = width;
	if (heightCamera > height){
		heightCamera = height;
		widthCamera = height*320/240;
	}

	radius = height / 2 -100;
}

function draw() {
	
	if (start){
		
		imageMode(CENTER);

		colorBackground = color(255,255,255);
		background(colorBackground);

 		Comienzo();
	} else {
		background(255);
		fill(0);
		
		textAlign(CENTER);
		textSize(50);
		text("LIMPIEZA", width/2, 50);
		textSize(32);
		text("< Presione una tecla para la limpieza>", width/2, 150);

		textSize(25);
		text("Ubique su cara en el centro", width/2, height/2-60);
		text("60 segundos", width/2,  height/2-30);
		imageMode(CENTER);
		image(capture, width/2, height/2+120, 320, 240);
		if (limpio){
			text("Limpieza Finalizada !", width/2, 90);			
		}
	}
	
}

function Comienzo(){
	image(capture, width/2, height/2, widthCamera, heightCamera);


	px = width/8 + cos(radians(angle))*(radius);
  	py = 75 + sin(radians(angle))*(radius);

  	var angle2 = angle + 180
	px2 = width/8 + cos(radians(angle2))*(radius);
  	py2 = 75 + sin(radians(angle2))*(radius);

  	angle -= frequency;
  	imageMode(CENTER);
	image(espada,px+ widthCamera/2,py + heightCamera/2);
	image(doble,px2+ widthCamera/2,py2 + heightCamera/2);
	println(cos(radians(angle))*(radius));
}

function keyPressed() {
	if (!start){
  		start = true;
  		startTime = millis();
	}

}