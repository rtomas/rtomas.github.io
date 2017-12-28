var capture, img;
var start, startTime, limpio;
var colorBackground;

function setup() {
	createCanvas(windowWidth, windowHeight);
	capture = createCapture(VIDEO);
	createCapture({
    audio: false,
    video: {
      facingMode: "user"
    }
  });
	capture.size(320, 240);
	capture.hide();
	start = false;
	limpio = false;

	img = loadImage("data/matom2.png"); 
	colorBackground = color(255);
}

function draw() {
	
	if (start){
		var heightCamera = width*240/320;
		var widthCamera = width;
		if (heightCamera > height){
			heightCamera = height;
			widthCamera = height*320/240;
		}
		imageMode(CENTER);

		background(colorBackground);
 		
 		image(capture, width/2, height/2, widthCamera, heightCamera);
 		image(img, width/2, height/2+5, widthCamera, heightCamera);

 		Comienzo();
	} else {
		background(255);
		fill(0);
		
		textAlign(CENTER);
		textSize(50);
		text("ARMONIZADOR", width/2, 50);
		textSize(32);
		text("< Presione una tecla para la limpieza>", width/2, 150);

		textSize(25);
		text("Ubique su cara en el centro", width/2, height/2-60);
		text("Con cada color imaginese pintandose todo su cuerpo mientras mira la imagen.", width/2,  height/2-30);
		imageMode(CENTER);
		image(capture, width/2, height/2+120, 320, 240);
		if (limpio){
			text("Limpieza Finalizada !", width/2, 90);			
		}
	}
	
}

function Comienzo(){
	var dif = millis()-startTime;
	textSize(15);
	fill(255);
	noStroke();
	if (dif >= 0 && dif <=4000){
		colorBackground = color(0);

		filter('INVERT');
		fill(255);
		rect(0,0,width,17);
		rect(0,height-17,width,17);
		fill(0);
		text("COLOR: BLANCO", width/2, 14);
	} else if (dif > 4000 && dif <=8000){
		colorBackground = color(238, 15, 183);
		tint(238, 15, 183);

		fill(238, 15, 183);
		rect(0,0,width,17);
		rect(0,height-17,width,17);
		fill(0);
		text("COLOR: ROSA", width/2, 14);
	} else if (dif > 8000 && dif <=12000){
		colorBackground = color(127, 127, 127);
		filter(GRAY);
		tint(127, 127, 127);

		fill(127, 127, 127);
		rect(0,0,width,17);
		rect(0,height-17,width,17);
		fill(0);
		text("COLOR: GRIS", width/2, 14);
	} else if (dif > 12000 && dif <=16000){
		colorBackground = color(238, 178, 15);
		tint(238, 178, 15);

		fill(238, 178, 15);
		rect(0,0,width,17);
		rect(0,height-17,width,17);
		fill(0);
		text("COLOR: NARANJA", width/2, 14);
	} else if (dif > 16000 && dif <=20000){
		colorBackground = color(15, 104, 238);
		tint(15, 104, 238);

		fill(15, 104, 238);
		rect(0,0,width,17);
		rect(0,height-17,width,17);
		fill(0);
		text("COLOR: AZUL INDIGO", width/2, 14);
	} else if (dif > 20000 && dif <=24000){
		colorBackground = color(31, 103, 29);
		tint(31, 103, 29);

		fill(31, 103, 29);
		rect(0,0,width,17);
		rect(0,height-17,width,17);
		fill(0);
		text("COLOR: VERDE OSCURO", width/2, 14);
	} else if (dif > 24000 && dif <=28000){
		colorBackground = color(179, 84, 219);
		tint(179, 84, 219);

		fill(179, 84, 219);
		rect(0,0,width,17);
		rect(0,height-17,width,17);
		fill(0);
		text("COLOR: LILA", width/2, 14);
	} else if (dif > 28000 && dif <=32000){
		colorBackground = color(170, 220, 118);
		tint(170, 220, 118);

		fill(170, 220, 118);
		rect(0,0,width,17);
		rect(0,height-17,width,17);
		fill(0);
		text("COLOR: VERDE CLARO", width/2, 14);
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
