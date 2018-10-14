function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function newroll(user) {
  var total=30;
  user.strength=getRandomInt(10)
  user.intelligence=getRandomInt(10)
  user.luck=getRandomInt(10)
  user.laziness=getRandomInt(10)
  user.happiness=100-getRandomInt(50)
  user.friends=getRandomInt(10)
}

function user() {
  this.strength=0;
  this.intelligence=0;
  this.luck=0;
  this.laziness=0;
  this.happiness=0;
  this.hunger=0;
  this.loan=0;
  this.friends=3;
  this.health=100;
  this.location=0;
  this.strength=0;
  this.strength=0;

}

function startnew() {
  new user;
}

function homesleep() {

}

function homeeat() {

}

function homestudy() {

}

function homeworkout() {

}

function checkout() {

}

function applyStarwucks() {

}

function applyWcdonalds() {

}

function applywrys() {

}

function studyingstarwucks() {

}

function flirtStarwucks() {

}

function stealwrys() {

}
