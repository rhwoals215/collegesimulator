function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function newroll() {
  var person=outputStorage();
  let total=30;
  person.strength=getRandomInt(10);
  total-=person.strength;
  person.intelligence=getRandomInt(10);
  total-=person.intelligence;
  person.attractiveness=getRandomInt(10);
  total-=person.attractiveness;
  person.luck=total;
  person.laziness=getRandomInt(10);
  person.friends=getRandomInt(10);
  inputStorage(person);
}

var user={
  strength:0,
  intelligence:0,
  luck:0,
  laziness:0,
  happiness:100,
  hunger:0,
  loan:0,
  friends:3,
  health:100,
  location:0,
  currentcarttotal:0,
  date:0,
  time:8,
  fatigue:0,
  attractiveness:0
}

function startNew() {
  var person = user;
  inputStorage(person);
}

function statWrite() {
  var person=outputStorage();
  document.write("Strength:"+person.strength+"</br>"+"Intelligence:"+person.intelligence+"</br>"+"Attractiveness:"+person.attractiveness);
  document.write("</br>"+"luck:"+person.luck+"</br>"+"Number of friends:"+person.friends);
}
function inputStorage(person){
  window.localStorage.setItem('person1', JSON.stringify(person));

}
function outputStorage(){
  return JSON.parse(window.localStorage.getItem('person1'));
}

/*function inputStorage(person){
  localStorage.str=person.strength;
  localStorage.int=person.intelligence;
  localStorage.laz=person.laziness;
  localStorage.hap=person.happiness;
  localStorage.hgr=person.hunger;
  localStorage.loan=person.loan;
  localStorage.frnd=person.friends;
  localStorage.hp=person.health;
  localStorage.lctn=person.location;
  localStorage.cct=person.currentcarttotal;
  localStorage.date=person.date;
  localStorage.ftg=person.fatigue;
  localStorage.atv=person.attractiveness;
}
function outputStorage(person){
  person.strength=parseInt(window.localStorage.getItem('str'));
  person.intelligence=localStorage.int;
  person.laziness=localStorage.laz;
  person.happiness=localStorage.hap;
  person.hunger=localStorage.hgr;
  person.loan=localStorage.loan;
  person.friends=localStorage.frnd;
  person.health=localStorage.hp;
  person.location=localStorage.lctn;
  person.currentcarttotal=localStorage.cct;
  person.date=localStorage.date;
  person.fatigue=localStorage.ftg;
  person.attractiveness=localStorage.atv;
}
*/
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
  console.log(hour+":"+minute+ampm);
}

function refreshTime(person) {
  if (person.time>=24){
    person.time-=24;
    person.date+=1;
  }
}

function homesleep(person) {
  if (person.fatigue>0){
    if (person.time<20 && person.time>=8){
      console.log(displayTime(person.time));
      console.log("You took a 2 hour nap.");
      if (person.fatigue<=3){
        console.log("Fatigue: "+person.fatigue+" -> 0");
        person.fatigue=0;
      }
      else {
        console.log("Fatigue: "+person.fatigue+" -> "+person.fatigue-3);
        person.fatigue-=3;
      }
      console.log("laziness: "+person.laziness+" -> "+person.laziness+1);
      person.laziness++;
    }
    else if (person.time<2 && person.time>=20) {
      console.log("You had a great sleep!");
      console.log("Fatigue: "+person.fatigue+" -> 0");
      person.fatigue=0;
      person.time=8;
    }
    else if (person.time<8 && person.time>=2){
      if (person.fatigue<=2){
        console.log("You slept for a bit.");
        person.fatigue=0;
        console.log("Fatigue: "+person.fatigue+" -> 0");
      }
      else {
        console.log("You slept for a bit, but you still feel tired.");
        console.log("Fatigue: "+person.fatigue+" -> "+person.fatigue-2);
        person.fatigue-=2;
      }
    }
    else{
      console.log("You couldn't sleep.");
    }
    refreshTime();
    console.log("Now it is "+displayTime(person.time));
  }
  else{
    console.log("You are not tired");
  }
}

function fridge() {
  person.vegi=0;
  person.meat=0;
  person.readytoeat=0;
}

function homeeat(person) {

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
