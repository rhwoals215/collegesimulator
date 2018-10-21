function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function newroll() {
  let person=outputStorage();
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
  let person = user;
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
  let countDay=0;
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
  return (week+" "+day);
}

function reloadDate() {
  document.getElementById("date").innerHTML=displayDate();
}

function homesleep() {
  let person=outputStorage();
  if (person.fatigue>0){
    if (person.time<20 && person.time>=8){
      document.getElementById("action_console").innerHTML =("</br>You took a 2 hour nap.");
      person.time+=2;
      if (person.fatigue<=3){
        document.getElementById("action_console").innerHTML +=("</br>Fatigue: "+person.fatigue+" -> 0");
        person.fatigue=0;
      }
      else {
        document.getElementById("action_console").innerHTML +=("</br>Fatigue: "+person.fatigue+" -> "+(person.fatigue-3));
        person.fatigue-=3;
      }
      document.getElementById("action_console").innerHTML +=("</br>laziness: "+person.laziness+" -> "+(person.laziness+1));
      person.laziness++;
    }
    else if (person.time<2 || person.time>=20) {
      document.getElementById("action_console").innerHTML =("</br>You had a great sleep!");
      document.getElementById("action_console").innerHTML +=("</br>Fatigue: "+person.fatigue+" -> 0");
      person.fatigue=0;
      person.time=8;
    }
    else if (person.time<8 && person.time>=2){
      if (person.fatigue<=2){
        document.getElementById("action_console").innerHTML =("</br>You slept for a bit.");
        person.fatigue=0;
        document.getElementById("action_console").innerHTML +=("</br>Fatigue: "+person.fatigue+" -> 0");
      }
      else {
        document.getElementById("action_console").innerHTML=("</br>You slept for a bit, but you still feel tired.");
        document.getElementById("action_console").innerHTML +=("</br>Fatigue: "+person.fatigue+" -> "+(person.fatigue-2));
        person.fatigue-=2;
      }
      person.time=8;
    }
    else{
      document.getElementById("action_console").innerHTML=("</br>You couldn't sleep.");
    }
    inputStorage(person);
    calculateTime();
  }
  else{
    document.getElementById("action_console").innerHTML=("</br>You are not tired");
  }
  reloadTime();
  reloadDate();
}

function fridge() {
  person.vegi=0;
  person.meat=0;
  person.readytoeat=0;
}

function homeeat() {

}

function homestudy() {

}

function homeworkout() {
  let person=outputStorage();
  document.getElementById("action_console").innerHTML =("</br>You worked out very hard!");
  person.fatigue++;
  person.time++;
  person.strength++;
  inputStorage(person);
  calculateTime();
  document.getElementById("action_console").innerHTML +=("</br>Fatigue: "+person.fatigue+" -> "+(person.fatigue+1));
  document.getElementById("action_console").innerHTML +=("</br>Strength: "+person.strength+" -> "+(person.strength+1));
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
