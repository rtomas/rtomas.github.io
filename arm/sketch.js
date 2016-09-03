var capture, img;
var start, startTime, limpio;

function setup() {
	createCanvas(windowWidth, windowHeight);
	capture = createCapture(VIDEO);
	capture.size(320, 240);
	capture.hide();
	start = false;
	limpio = false;

	img = loadImage("data/matom2.png"); 
}

function draw() {
	println(start);
	if (start){
		background(255);
		var heightCamera = width*240/320;
		var widthCamera = width;
		if (heightCamera > height){
			heightCamera = height;
			widthCamera = height*320/240;
		}
		imageMode(CENTER);
 		image(capture, width/2, height/2, widthCamera, heightCamera);
 		image(img, width/2, height/2, widthCamera, heightCamera);

 		Comienzo();
	} else {
		background(255);
		fill(0);
		textSize(32);
		textAlign(CENTER);
		text("< Presione una tecla para la limpieza>", width/2, 150);

		textSize(25);
		text("Con cada color imaginese pintandose todo su cuerpo mientras mira la imagen.", width/2, 30);

		if (limpio){
			text("Limpieza Finalizada !", width/2, 90);			
		}
	}
	
}

function Comienzo(){
	var dif = millis()-startTime;
	textSize(15);
	fill(255);
	if (dif >= 0 && dif <=4000){
		fill(0);
		text("< BLANCO >", width/2, 14);
		filter('INVERT');
	} else if (dif > 4000 && dif <=8000){
		text("< ROSA >", width/2, 14);
		tint(238, 15, 183);
	} else if (dif > 8000 && dif <=12000){
		text("< GRIS >", width/2, 14);
		filter(GRAY);
		tint(127, 127, 127);
	} else if (dif > 12000 && dif <=16000){
		text("< Naranja >", width/2, 14);
		tint(238, 178, 15);
	} else if (dif > 16000 && dif <=20000){
		text("< Azul Indigo >", width/2, 14);
		tint(15, 104, 238);
	} else if (dif > 20000 && dif <=24000){
		text("< Verde Oscuro >", width/2, 14);
		tint(31, 103, 29);
	} else if (dif > 24000 && dif <=28000){
		text("< Lila >", width/2, 14);
		tint(179, 84, 219);
	} else if (dif > 28000 && dif <=32000){
		text("< Verde Claro >", width/2, 14);
		tint(170, 220, 118);
	} else if (dif > 32000)	{
		start = false;
		limpio = true;
	}
}

function keyPressed() {
	if (!start){
  		start = true;
  		startTime = millis();
	}

}