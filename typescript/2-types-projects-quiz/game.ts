/**
 * Let's make a game 🕹
 */

// my solution
const position = { x: 0, y: 0 };
type Direction = 'up' | 'down' | 'left' | 'right';
type Coordination = {
  x: number;
  y: number;
};
function move(direction: Direction): Coordination {
  switch (direction) {
    case 'up':
      return {
        ...position,
        y: position.y + 1,
      };
    case 'down':
      return {
        ...position,
        y: position.y--, // bullshit
      };
    case 'left':
      return {
        ...position,
        x: position.x--,
      };
    case 'right':
      return {
        ...position,
        x: position.x++,
      };
    default:
      throw new Error('wtf');
  }
}

function moveOfElly(direction: 'up' | 'down' | 'left' | 'right') {
  switch (direction) {
    case 'up':
      position.y += 1;
      break;
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
    default:
      throw new Error(`unknown direction: ${direction}`);
  }
}

console.log(position); // { x: 0, y: 0}
// move('up');
console.log('position after up', move('up'), position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

moveOfElly('right');
console.log(position); // { x: 1, y: 0}
