const size = 100

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  line(windowWidth / 2, 0, windowWidth/ 2, windowHeight)
  drawLeftBox()
  drawRightBox()
}

// function draw() {
  

// }
function drawLeftBox(){
  let c1_x = windowWidth / 4 + 20, c1_y = windowHeight / 2;
  rect(c1_x-size, c1_y-size, size * 2 -10, size * 2)
  quad(
    c1_x - size,   c1_y-size,
    c1_x + size + 10,   c1_y-size,
    c1_x + size + 10+40,c1_y-size-40,
    c1_x - size + 10+40, c1_y-size-40
  )
  quad(
    c1_x + size -10,   c1_y-size,
    c1_x + size +10+40,c1_y-size-40,
    c1_x + size +10+40, c1_y+size-40,
    c1_x + size -10,c1_y+size,
  )
}

function drawRightBox(){
  let c1_x = windowWidth * 3 / 4 - 20, c1_y = windowHeight / 2;
  rect(c1_x-size, c1_y-size, size * 2 +10, size * 2)
  quad(
    c1_x - size,   c1_y-size,
    c1_x + size +10,   c1_y-size,
    c1_x + size +40,c1_y-size-40,
    c1_x - size-10+40, c1_y-size-40
  )
  quad(
    c1_x + size + 10,   c1_y-size,
    c1_x + size+40,c1_y-size-40,
    c1_x + size+40, c1_y+size-40,
    c1_x + size + 10,c1_y+size,
  )
}