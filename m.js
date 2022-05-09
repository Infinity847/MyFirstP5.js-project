var X,Y;
function setup() {
    canvas = createCanvas(1000, 1000);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(width, height);
  
  }
  function canvasCircle() {
    X = Math.random() * 200;
    Y = Math.random() * 200;
    Y = Y - 100;
    X = X - 100;
    fill('red')
    stroke('red');
    circle(X,Y,30,30);
    console.log('CIRCLE MADE');
  }
  