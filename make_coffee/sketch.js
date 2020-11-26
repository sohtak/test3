var mic;
//let w;

function setup() {
  //w = document.documentElement.scrollwidth;
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(134, 150, 120);
  var vol = mic.getLevel();
  fill(255);
  text('tap to start', width / 2, 40);
  //ellipse(width/2, height/2, 200, vol * 300);
  console.log(vol);

  if (vol > 0.3) {
 window.open("https://editor.p5js.org/sohtak/embed/XfVPqnCcs");
  } else {
    noStroke();
    ellipse(width / 2, height / 2, 200, vol * 300);

  }

}