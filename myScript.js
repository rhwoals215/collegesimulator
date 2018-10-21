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
  attractiveness:6
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
  add("fatigue: "+person.fatigue+" -> "+(person.fatigue+1));
  add("Strength: "+person.strength+" -> "+(person.strength+1));
  person.fatigue++;
  person.time++;
  person.intelligence++;
  fatiguecheck();
  reloadTime();
  reloadDate();
}

function homeworkout() {
  let person=outputStorage();
  write("You worked out very hard!");
  add("Fatigue: "+person.fatigue+" -> "+(person.fatigue+1));
  add("Strength: "+person.strength+" -> "+(person.strength+1));
  person.fatigue++;
  person.time++;
  person.strength++;
  inputStorage(person);
  calculateTime();
  fatiguecheck();
  reloadTime();
  reloadDate();
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
