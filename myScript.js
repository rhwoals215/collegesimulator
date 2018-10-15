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
  this.currentcarttotal=0;
  this.date=0;
  this.time=8;
  this.fatigue=0;
}

function startnew() {
  new user;
}
function displayTime(user) {
  var ampm="AM";
  var hour=math.floor(user.time);
  var minute="00";
  if (user.time%1!=0){
    minute="30";
  }
  if (user.time>12){
    ampm="PM";
    time-=12;
  }
  console.log(hour+":"_+minute+ampm);
  }
}

function refreshTime(user) {
  if (user.time>=24){
    user.time-=24;
    user.date+=1;
  }
}

function homesleep(user) {
  if (user.fatigue>0){
    if (user.time<20 && user.time>=8){
      console.log(displayTime(user.time));
      console.log("You took a 2 hour nap.");
      if (user.fatigue<=3){
        console.log("Fatigue: "+user.fatigue+" -> 0");
        user.fatigue=0;
      }
      else {
        console.log("Fatigue: "+user.fatigue+" -> "+user.fatigue-3);
        user.fatigue-=3;
      }
      console.log("laziness: "+user.laziness+" -> "+user.laziness+1);
      user.laziness++;
    }
    else if (user.time<2 && user.time>=20) {
      console.log("You had a great sleep!");
      console.log("Fatigue: "+user.fatigue+" -> 0");
      user.fatigue=0;
      user.time=8;
    }
    else if (user.time<8 && user.time>=2){
      if (user.fatigue<=2){
        console.log("You slept for a bit.");
        user.fatigue=0;
        console.log("Fatigue: "+user.fatigue+" -> 0");
      }
      else {
        console.log("You slept for a bit, but you still feel tired.");
        console.log("Fatigue: "+user.fatigue+" -> "+user.fatigue-2);
        user.fatigue-=2;
      }
    }
    else{
      console.log("You couldn't sleep.");
    }
    refreshTime();
    console.log("Now it is "+displayTime(user.time));
  }
  else{
    console.log("You are not tired");
  }
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
