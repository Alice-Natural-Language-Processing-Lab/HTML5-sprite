import Sprite from './sprite';

// Create the sprites
var sprites = [
  new Sprite('1'),
  new Sprite('2'),
  new Sprite('3')
];
var selectedSprite = 1;

// Set up user interface
var animStateSelect = document.getElementById('animation-state');
animStateSelect.addEventListener('change', (event) => {
  sprites[selectedSprite].setState(event.target.value);
});

var spriteSelect = document.getElementById('sprite');
spriteSelect.addEventListener('change', (event) => {
  selectedSprite = event.target.value;
  sprites[selectedSprite].setState('idle');
  document.getElementById('animation-state').value = 'idle';
});

// Create the canvas and rendering context
var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');

/** @function update
  * Updates the app.
  */
function update() {
  sprites[selectedSprite].update();
}

/** @function render
  * Renders the app.
  */
function render() {
  ctx.clearRect(0,0, 500, 500);
  sprites[selectedSprite].render(ctx, 50, 50);
}

/** @function loop
  * The main game loop.
  */
function loop() {
  update();
  render();
}

// Set the framerate to 1/30th of a second
setInterval(loop, 1000/30);
