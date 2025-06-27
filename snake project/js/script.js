//creating iphone calculator my assingement
/*the first thing is  */
const canvas = document.querySelector(".canva"); //selection the element
const ctx = canvas.getContext("2d"); //this is only specifically for canvas ,what do i want to do ? anwer this question
console.log(ctx);

//game is an elusion it is an elusion how do i create an elusion how to create such elusion
const scale = 20; //
const rows = canvas.height / scale; //wed gone yetesemeru 25
const columns = canvas.width / scale; //25 colomun
let snake = []; //this is the snake to drow only one array method found in the get context

snake[0] = {
  x: Math.floor(Math.random() * columns) * scale,
  y: Math.floor(Math.random() * columns) * scale,
};

let food = {
  x: Math.floor(Math.random() * columns) * scale,
  y: Math.floor(Math.random() * rows) * scale,
};

let d = "right";

document.onkeydown = directionChanger;
function directionChanger(event) {
  let key = event.keyCode;
  if (key == 37 && d != "right") {
    d = "left";
  } else if (key == 38 && d != "down") {
    d = "up";
  } else if (key == 39 && d != "left") {
    d = "right";
  } else if (key == 40 && d != "up") {
    d = "down";
  }
}

let playGame = setInterval(draw, 200); //time is inserted here and I will come back and insert here
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "red"; //pink border still now I can draw pink bordered rectangle
    ctx.fillRect(snake[i].x, snake[i].y, scale, scale);
    ctx.strokeRect(snake[i].x, snake[i].y, scale, scale);
  }

  // Draw the food
  ctx.fillStyle = "#FFFF00"; // Set the fill color to yellow
  ctx.strokeStyle = "green"; // Set the border color to green

  // Draw the filled rectangle for the food
  ctx.fillRect(food.x, food.y, scale, scale);

  // Optionally, draw the border for the food (if you want a border)
  ctx.strokeRect(food.x, food.y, scale, scale);

  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "red"; //pink border still now I can draw pink bordered rectangle
  ctx.fillRect(snake[0].x, snake[0].y, scale, scale); //now squere is constractied
  ctx.strokeRect(snake[0].x, snake[0].y, scale, scale);
  //old head position
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;
  console.log(snakeX);
  //which direction
  if (d == "left") snakeX -= scale;
  if (d == "up") snakeY -= scale;
  if (d == "right") snakeX += scale;
  if (d == "down") snakeY += scale;

  if (snakeX >= canvas.width) {
    snakeX = 0;
  }
  if (snakeY >= canvas.height) {
    snakeY = 0;
  }
  if (snakeX < 0) {
    snakeX = canvas.width - scale;
  }
  if (snakeY < 0) {
    snakeY = canvas.height - scale;
  }

  if (snakeX == food.x && snakeY == food.y) {
    food = {
      x: Math.floor(Math.random() * columns) * scale,
      y: Math.floor(Math.random() * rows) * scale,
    };
  } else {
    snake.pop();
  }

  let newNode = {
    x: snakeX,
    y: snakeY,
  };

  snake.unshift(newNode); //inter new object infront of the first one
  // snake.pop(newNode);
}

function eatFunction(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x == array[i].x && head.y == array[i].y) {
      return true;
    }
  }
  return false;
}

ctx.fillRect(0, 0, 50, 80); //th first two zero indect the initial position of the rectangle and the second two numbers are the width and height of the rectangle
ctx.fillRect(10, 30, 50, 80);
ctx.fillRect(10, 10, scale, scale); //now squere is constractied

// lets create boarder for the squere
//  ctx.strokeRect(10,10,scale,scale);
