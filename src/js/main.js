//--------------------//
//------ 計時器 -------//
//--------------------//
function checkTime(i) { //將個位數的值前面加上“0"
  if (i < 10) {
    i = "0" + i;
  }; // add zero in front of numbers < 10

  return i;
}
var num = 15 * 60000;
var ms = num;
var h, m, s, t;
changeTime();

document.getElementById("startBtn").onclick = function() {
  start();
};
function start() {
  if (!t) countDown();
}


//----- 倒數 -----//
function countDown() {
  ms -= 1000;
  changeTime();

  t = setTimeout(countDown, 1000);
  //0秒
  if (ms < 1000 ){
    ms = num * 60000;
    function reset(){}
    clearTimeout(t);
  }
  return ms;
}
//----- 換算 -----//
function changeTime(){
  s = Math.floor((ms / 1000) % 60);
  m = Math.floor((ms / 60000) % 60);
  h = Math.floor(ms / 3600000);
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  var Time = h + ":" + m + ":" + s;
  document.getElementById("countDown").innerHTML = Time;
}

//暫停
document.getElementById("pauseBtn").onclick = function() {
  pause();
};
function pause(){
  clearTimeout(t);
  t = null;
}
//重置
document.getElementById("resetBtn").onclick = function() {
  reset();
};
function reset(){
  clearTimeout(t);
  t = null;
  ms = num;
  changeTime();
}

//--------------------//
//------切換樣式 ------//
//--------------------//
//------清除class
function removeClass(){
  var el = document.getElementById("styleBox");
  if (el.classList.contains("style1")){
    el.classList.remove("style1")
  }
  if (el.classList.contains("style2")){
    el.classList.remove("style2")
  }
  if (el.classList.contains("style3")){
    el.classList.remove("style3")
  }
  if (el.classList.contains("style4")){
    el.classList.remove("style4")
  }
  if (el.classList.contains("style5")){
    el.classList.remove("style5")
  }
  if (el.classList.contains("undefind")){
    el.classList.remove("undefind")
  }
}
//------更換class
document.getElementById("cardStyle_1").onclick = function() {
  cStyle1();
};
document.getElementById("cardStyle_2").onclick = function() {
  cStyle2();
};
document.getElementById("cardStyle_3").onclick = function() {
  cStyle3();
};
document.getElementById("cardStyle_4").onclick = function() {
  cStyle4();
};
document.getElementById("cardStyle_5").onclick = function() {
  cStyle5();
};
function cStyle1(){
  var el = document.getElementById("styleBox");
  removeClass();
   el.classList.add("style1");
}
function cStyle2(){
  var el = document.getElementById("styleBox");
  removeClass();
   el.classList.add("style2");
}
function cStyle3(){
  var el = document.getElementById("styleBox");
  removeClass();
   el.classList.add("style3");
}
function cStyle4(){
  var el = document.getElementById("styleBox");
  removeClass();
   el.classList.add("style4");
}
function cStyle5(){
  var el = document.getElementById("styleBox");
  removeClass();
   el.classList.add("style5");
}
//------隨機class
document.getElementById("styleBtn").onclick = function() {
  randomStyle();
};
function randomStyle(){
  var styleItem = ["style1", "style2", "style3", "style4", "style5"];
  var x = Math.floor(Math.random() * 5);
  var randomClass = styleItem[x];
  var el = document.getElementById("styleBox");
  removeClass();
   el.classList.add(randomClass);
}
