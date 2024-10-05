// Task 1
var dairy = ['cheese', 'sour cream',
  'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy() {
  for (let item of dairy) {
      console.log(item);
  }
}
logDairy();

// Task 2
const animal = {canJump: true};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (let key in bird){
      if (bird.hasOwnProperty(key)){
         console.log(`${key}: ${bird[key]}`)
     }
  }
}
birdCan();
// Task 3
function animalCan() {
  for (let key in bird) {
      console.log(`${key}: ${bird[key]}`);
  }
}
animalCan();


const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);