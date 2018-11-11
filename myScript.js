function write(str) {
  document.getElementById("action_console").innerHTML =(str);
}
function add(str) {
  document.getElementById("action_console").innerHTML +=("</br>"+str);
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function newroll() {
  let person=outputStorage();
  let total=25;
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
  cash: 1000,
  strength:6,
  intelligence:6,
  luck:6,
  laziness:0,
  happiness:100,
  hunger:0,
  loan:0,
  friends:5,
  health:100,
  location:0,
  currentcarttotal:0,
  date:0,
  time:8,
  fatigue:0,
  attractiveness:6,
  work: 0
}

function startNew() {
  let person = user;
  newroll();
  inputStorage(person);
}

function statWrite() {
  let person=outputStorage();
  document.write("Strength:"+person.strength+"</br>"+"Intelligence:"+person.intelligence+"</br>"+"Attractiveness:"+person.attractiveness);
  document.write("</br>"+"luck:"+person.luck+"</br>"+"Number of friends:"+person.friends);
}

function inputStorage(person){
  window.localStorage.setItem('person1', JSON.stringify(person));

}

function outputStorage(){
  return JSON.parse(window.localStorage.getItem('person1'));
}

function fatiguecheck() {
  let person=outputStorage();
  if (person.fatigue>=10 && person.fatigue<20){
    person.health-=1;
    add("</br>But you feel tired.")
    add("Health: "+(person.health+1)+" -> "+person.health);
  }
  else if (person.fatigue>=20 && person.fatigue<30){
    person.health-=2;
    add("</br>But you feel very tired.")
    add("Health: "+(person.health+2)+" -> "+person.health);
  }
  else if (person.fatigue>=30 && person.fatigue<40){
    person.health-=3;
    add("</br>But you feel extremely tired.")
    add("Health: "+(person.health+3)+" -> "+person.health);
  }
  inputStorage(person);
}

function hungercheck() {
  let person=outputStorage();
  if (person.hunger>=10 && person.hunger<20){
    add("</br>But you feel hungry.")
  }
  else if (person.hunger>=20 && person.hunger<30){
    person.health--;
    add("</br>But you feel very hungry.")
    add("Health: "+(person.health+1)+" -> "+person.health);
  }
  else if (person.hunger>=30 && person.hunger<40){
    person.health-=2;
    add("</br>But you are starving.")
    add("Health: "+(person.health+2)+" -> "+person.health);
  }
  inputStorage(person);
}

function healthcheck() {
  let person=outputStorage();
  if (person.health==0){
    write("You have died..")
    death();
  }
}

function death() {

}

function displayTime() {
  let person=outputStorage();
  var ampm="AM";
  var hour=Math.floor(person.time);
  var minute="00";
  if (person.time%1!=0){
    minute="30";
  }
  if (person.time>12){
    ampm="PM";
    hour-=12;
  }
  return (hour+":"+minute+ampm);
}

function calculateTime() {
  let person=outputStorage();
  if (person.time>=24){
    person.time-=24;
    person.date+=1;
  }
  inputStorage(person);
}

function reloadTime() {
  document.getElementById("clock").innerHTML=displayTime();
}

function displayDate() {
  let person=outputStorage();
  let day = "";
  let week=0;
  if (person.date%7==0){
    day="Monday";
  }
  else if (person.date%7==1){
    day="Tuesday";
  }
  else if (person.date%7==2){
    day="Wednesday";
  }
  else if (person.date%7==3){
    day="Thursday";
  }
  else if (person.date%7==4){
    day="Friday";
  }
  else if (person.date%7==5){
    day="Saturday";
  }
  else if (person.date%7==6){
    day="Sunday";
  }
  for(i=0;i<person.date;i++){
    if (i%7==6){
      week++;
    }
  }
  return ("Week "+week+", "+day);
}

function reloadDate() {
  document.getElementById("date").innerHTML=displayDate();
}

function reloadWork() {
  document.getElementById("work").innerHTML=workCheck();
}

function homesleep() {
  let person=outputStorage();
  if (person.fatigue>0){
    if (person.time<21 && person.time>=8){
      write("You took a 2 hour nap.");
      person.time+=2;
      if (person.fatigue<=3){
      add("Fatigue: "+person.fatigue+" -> 0");
        person.fatigue=0;
      }
      else {
      add("Fatigue: "+person.fatigue+" -> "+(person.fatigue-3));
        person.fatigue-=3;
      }
    add("laziness: "+person.laziness+" -> "+(person.laziness+1));
      person.laziness++;
    }
    else if (person.time<2 || person.time>=21) {
      write("You had a great sleep!");
    add("Fatigue: "+person.fatigue+" -> 0");
      person.fatigue=0;
      if (person.time>=21){person.date+=1;}
      person.time=8;
    }
    else if (person.time<8 && person.time>=2){
      if (person.fatigue<=2){
        write("You slept for a bit.");
        person.fatigue=0;
      add("Fatigue: "+person.fatigue+" -> 0");
      }
      else {
        write("You slept for a bit, but you still feel tired.");
      add("Fatigue: "+person.fatigue+" -> "+(person.fatigue-2));
        person.fatigue-=2;
      }
      person.time=8;
    }
    else{
      write("You couldn't sleep.");
    }
    calculateTime();
    inputStorage(person);
  }
  else{
    write("You are not tired");
  }
  reloadTime();
  reloadDate();
}

function showstats() {
  let person=outputStorage();
  write("Attributes:</br></br>Cash: $"+person.cash+
  "</br>Strength: "+person.strength+
  "</br>Intelligence: "+person.intelligence+
  "</br>Luck: "+person.luck+
  "</br>Laziness: "+person.laziness+
  "</br>Happiness: "+person.happiness+
  "</br>Hunger: "+person.hunger+
  "</br>Friends: "+person.friends+
  "</br>Health: "+person.health+
  "</br>Fatigue: "+person.fatigue+
  "</br>Attractiveness: "+person.attractiveness);
}

function fridge() {
  person.vegi=0;
  person.meat=0;
  person.readytoeat=0;
}

function homeeat() {

}

function homestudy() {
  let person=outputStorage();
  write("You studied hard!");
  inputStorage(person);
  calculateTime();
  add("Fatigue: "+person.fatigue+" -> "+(person.fatigue+1));
  add("Strength: "+person.strength+" -> "+(person.strength+1));
  add("Hunger: "+person.hunger+" -> "+(person.hunger+1));
  person.fatigue++;
  person.time++;
  person.intelligence++;
  person.hunger++;
  fatiguecheck();
  reloadTime();
  reloadDate();
  hungercheck();
}

function homeworkout() {
  let person=outputStorage();
  write("You worked out very hard!");
  add("Fatigue: "+person.fatigue+" -> "+(person.fatigue+2));
  add("Strength: "+person.strength+" -> "+(person.strength+1));
  add("Hunger: "+person.hunger+" -> "+(person.hunger+2));
  person.fatigue+=2;
  person.time++;
  person.strength++;
  person.hunger+=2;
  inputStorage(person);
  calculateTime();
  fatiguecheck();
  hungercheck();
  reloadTime();
  reloadDate();
}

function checkout() {

}

function workCheck(){
  let person=outputStorage();
  if (person.work==2){
    return ("Work");
  }
  return("Apply for a Job");
}

function applyStarwucks() {
  let person=outputStorage();
  if (person.work==2){
    write("You worked for 5 hours.")
    add("Fatigue: "+person.fatigue+" -> "+(person.fatigue+5));
    add("Hunger: "+person.hunger+" -> "+(person.hunger+2));
    add("You earned $60.");
    person.time+=5;
    person.fatigue+=5;
    person.cash+=60;
    person.hunger+=2;
  }
  else{
    if (person.work==0){

    }
    else{
      write("You don't work here..");
    }
  }
}

function applyWcdonalds() {

}

function applywrys() {

}

function studyingstarwucks() {

}

function flirtStarwucks() {
  let person=outputStorage();
  if (person.attractiveness>=40 && person.luck>=10){
    write("You were very smooth and got the number.");
    person.attractiveness+=2;
    add("Attractiveness: "+(person.attractiveness-2)+" -> "+person.attractiveness);
  }
  else if (person.attractiveness>=20&&person.attractiveness<40) {
    write("The barista seemed interested, but declined to give you the number");
  }
  else{
    write("The barista said no.");
  }
  inputStorage(person);
}

function stealwrys() {

}
