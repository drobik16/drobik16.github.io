var randomkey = null;
var totalbonus = 0;
var TimerId = null;
var IntervalId = null;

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
function pause_key() {
  clearTimeout(TimerId);
  clearInterval(IntervalId);
  key_obj[26].innerHTML = "P";
  inform_obj.innerHTML = 'Пауза';
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