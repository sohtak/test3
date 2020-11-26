var mic;
let r ;

function setup() {
  //w = document.documentElement.scrollwidth;
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  r = random(40, 500);
}


function draw() {
  background(134, 150, 120);
  var vol = mic.getLevel();
  fill(255);
  textSize(15);
  text('tap to start', width/2-20, 40);
  //ellipse(width/2, height/2, 200, vol * 300);
  console.log(vol);

  if (vol > 0.3) {
 window.open("https://editor.p5js.org/sohtak/embed/XfVPqnCcs");
  } else {
    noStroke();
    fill(166, 63, 51);
    ellipse(width / 2, height / 2, r, vol * 300);

  }

}