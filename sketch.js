// size divisible by out canvas with no remainder.

// let size = 40

function setup() {
  createCanvas(1200, 1200);
  background(184, 227, 195,220);

  stroke(255);
  strokeWeight(4);
  // frameRate(1)

  for (let x = 0; x < width; x += 400) {
    for (let y = 0; y < height; y += 400) {
      //lines
      if (random(100) < 50) {
        line(x + 100, y + random(400), x + 100, random(300, 550) + y);
        line(x + 300, y + 100, x + 300, random(300, 550) + y);
        line(x + 400, y + random(800), x + 400, random(300, 550) + y);
        line(x + 400, y + random(800), x + 400, random(300, 550) + y);

      } else {
        line(x + 200, 150 + y, 100 + x, 150 + y);
        line(x + 200, 150 + y, random(500, 650) + x, 150 + y);
        line(x + 400, y+300, random(500, 800) + x, y+300);
        line(x + 400, y+100, random(500, 800) + x, y+100);

      }

      //dots
      if (random(100) < 30) {
        ellipse(x + random(120), y + random(120), 2, 2);
        ellipse(x + random(140), y + random(140), 4, 4);
        ellipse(x + random(160), y + random(160), 2, 2);
        ellipse(x + random(180), y + random(180), 2, 2);
        ellipse(x + random(200), y + random(200), 4, 4);
        ellipse(x + random(220), y + random(220), 2, 2);
      } else {
        ellipse(x + random(150), y + random(150), 5, 5);
        ellipse(x + random(130), y + random(130), 3, 3);
        ellipse(x + random(170), y + random(170), 3, 3);
      }
      //rectangles
      if (random(300) < 40) {
        fill(random(220,265),random(180,220),random(200,244),120)
        rect(random(200, 400) + x, y, random(400, 800), random(100, 300), 220);
      } else {
        fill(random(220,265),random(180,220),random(200,244),120)
        rect(
          random(400, 800) + x,
          random(100, 200) + y,
          random(50, 200),
          100,
          10
        );
      }
      //ovals
      if (random(100) > 50) {
        ellipse(random(200) + x, random(100) + y, random(250), random(50, 200));
      } else {
        ellipse(random(200) + x, random(100) + y, random(250), random(150, 300));
      }
    }
  }

    // save("tile.png")
} // the end of setup

//I'm not even going to use the draw...
function draw() {}
