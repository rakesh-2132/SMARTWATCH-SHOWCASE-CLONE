var btn1 = document.getElementById("div-1");
var btn2 = document.getElementById("div-2");
var btn3 = document.getElementById("div-3");
var btn4 = document.getElementById("div-4");

var watchImg = document.getElementById("watch-img");

var timeTxt = document.getElementById("time-text");
var heartImg = document.getElementById("heart-img");
var heartTxt = document.getElementById("heart-text");


var timeBtn = document.getElementById("time-btn");
var heartBtn = document.getElementById("heart-btn");

btn1.addEventListener("click", function(){
    watchImg.src="https://i.imgur.com/iOeUBV7.png"
})

btn2.addEventListener("click", function(){
    watchImg.src="https://i.imgur.com/PTgQlim.png"
})

btn3.addEventListener("click", function(){
    watchImg.src="https://i.imgur.com/Mplj1YR.png"
})

btn4.addEventListener("click", function(){
    watchImg.src="https://i.imgur.com/xSIK4M8.png"
})


function time() {
    heartTxt.classList.remove("show");
    heartTxt.classList.add("hide");
    heartImg.classList.remove("show");
    heartImg.classList.add("hide");
    timeTxt.classList.remove("hide");
    timeTxt.classList.add("show");

    setInterval(() => {
      var d = new Date();
      var s = d.getSeconds();
      var m = d.getMinutes();
      hours = d.getHours();
      timeTxt.textContent =
        ("0" + hours).substr(-2) +
        ":" +
        ("0" + m).substr(-2) +
        ":" +
        ("0" + s).substr(-2)
    }, 1000);
}

function heart() {
    timeTxt.classList.remove("show");
    timeTxt.classList.add("hide");
    heartImg.classList.remove("hide");
    heartImg.classList.add("show");
    heartTxt.classList.remove("hide");
    heartTxt.classList.add("show");
}

timeBtn.addEventListener("click", time);
heartBtn.addEventListener("click", heart);