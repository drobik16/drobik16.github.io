var randomkey = null;
var totalbonus = 0;
var TimerId = null;
var IntervalId = null;
var count=0;
var timer;

document.body.appendChild(document.createElement("BR"));

var obj = document.createElement("div");
document.body.appendChild(obj);
obj.className = "key_block";

document.body.appendChild(document.createElement("BR"));
document.body.appendChild(document.createElement("BR"));

var key_array= 		["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"," "];
var key_code_array= [ 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77];
var key_obj = [];

for (var i = 0; i < key_array.length; i++) {
  if (i === 10 || i === 19) {
    document.body.appendChild(document.createElement("BR"));
  }
  key_obj[i] = document.createElement("div");
  document.body.appendChild(key_obj[i]);
  key_obj[i].className = "key_block";
  key_obj[i].innerHTML = key_array[i];
}
key_obj[26].style.color = "blue";
document.body.appendChild(document.createElement("BR"));

inform_obj = document.createElement("div");
document.body.appendChild(inform_obj);
inform_obj.className = "key_block inform_block";
inform_obj.innerHTML = 'Для начала нажмите "пробел" на клавиатуре.';

window.addEventListener('keydown', myfunction, false);
function myfunction(event) {
  console.log(event.keyCode);
  if (event.keyCode === key_code_array[randomkey]) {
    correct_key();
  } else if (event.keyCode === 32) {
    space_key();
  } else if (event.keyCode === 27 || event.keyCode === 19) {
    pause_key();
  } else if (event.keyCode != key_code_array[randomkey]) {
    not_correct_key();
  }
}
  function timeCount() {
    document.getElementById("countTime").innerHTML = count.toString();
    count++;
    timer = window.setTimeout(function(){ timeCount() },1000);
  }
   function startCount() {
    if (!timer)
      timeCount();
  }
  function stopCount() {
      if (timer) {
        clearTimeout(timer);
        timer=null;
      }
    }
function start() {
  if (randomkey === null) {
    randomkey = Math.floor(Math.random()*(key_array.length - 1));
    key_obj[randomkey].style.color = "white";
    key_obj[randomkey].style.backgroundColor = "black";	
    obj.innerHTML = key_array[randomkey];
    key_obj[26].innerHTML = 3;
   	IntervalId = setInterval(printdate_s,1000);
   	TimerId = setTimeout(time_over,3000);	
  }
}	
function printdate_s() {
  key_obj[26].innerHTML--;
}
function correct_key() {
  clearTimeout(TimerId);
  clearInterval(IntervalId);
  totalbonus++;
  inform_obj.innerHTML = "Правильно + 1 бал. Итого " + totalbonus + " балов!";
  inform_obj.style.color = "green";
  key_obj[randomkey].style.color = "black";
  key_obj[randomkey].style.backgroundColor = "white";	
  obj.innerHTML = "";	
  randomkey = null;
  start();	
}
function not_correct_key() {
  clearTimeout(TimerId);
  clearInterval(IntervalId);
  totalbonus--;
  inform_obj.innerHTML = "Вы ошиблись минус 1 бал. Итого " + totalbonus + " балов.";
  inform_obj.style.color = "red";
  if (randomkey != null) {
    key_obj[randomkey].style.color = "black";
    key_obj[randomkey].style.backgroundColor = "white";	
    obj.innerHTML = "";	
  }
  randomkey = null;
  start();	
}
function space_key() {
  clearTimeout(TimerId);
  clearInterval(IntervalId);
  inform_obj.innerHTML = "Начнём с начала у Вас 0 балов!";
  inform_obj.style.color = "black";
  if (randomkey != null) {
    key_obj[randomkey].style.color = "black";
    key_obj[randomkey].style.backgroundColor = "white";	
    obj.innerHTML = "";	
  }
  totalbonus = 0;
  randomkey = null;
  timer1.start()
  start();	
}
function time_over() {
  clearTimeout(TimerId);
  clearInterval(IntervalId);
  totalbonus--;
  inform_obj.innerHTML = "Время вышло минус 1 бал. Итого " + totalbonus + " балов.";
  inform_obj.style.color = "red";
  if (randomkey != null) {
    key_obj[randomkey].style.color = "black";
    key_obj[randomkey].style.backgroundColor = "white";	
    obj.innerHTML = "";	
  }
  randomkey = null;
  start();	
}

var time = 60,
    fps = 60;

var Timer = function(obj){
  this.time = obj.time;
  this.fps = obj.fps;
  this.onEnd = obj.onEnd || null;
  this.onStart = obj.onStart || null;
  this.onTick = obj.onTick || null;
  this.intervalID = null;

  this.start = () => {
    this.interval = setInterval(this.update, 1000 / this.fps);
    this.onStart ? this.onStart() : void 0;
    return this;
  };
  this.stop = () => {
    clearInterval(this.interval);
    this.onEnd ? this.onEnd() : void 0;
  };
  this.update = () => {
    this.time > 0 ? this.time -= 1/this.fps : this.stop();
    this.onTick ? this.onTick() : void 0;
    return this.get();
  }
  this.get = (par) => {
    switch(par) {
      case undefined:
        return this.time;
        break;
      case "dig":
        return Math.ceil(this.time);
        break;
      case "end":
        return this.onEnd();
        break;
    }
  }
}

var timer1 = new Timer({
  time: time,
  fps: fps,
  onTick: tick,
  onEnd: endTimer,
  onStart: onTimerStart
});

function onTimerStart(){
  console.log("timer started");
}
function endTimer(){
  console.log("timer ended");
  endGame();
}


requestAnimationFrame(tick);
function tick(){
  id("output").innerHTML = timer1.get("dig");
  id("slider").style.width = timer1.get()/time *100 + "%";
}

function id(id){
  return document.getElementById(id);
}


function endGame(){
	alert('Ваш результат ' + totalbonus);
  	randomkey = null;
 	totalbonus = 0;
 	clearTimeout(TimerId);
  	clearInterval(IntervalId);
 	count=0;
 	timer=0;
}

