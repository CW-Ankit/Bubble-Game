let Timer = 150;
var hitrn;
let score = 0

function bubbleMaker() {
    let clutter = "";

    for (let i = 1; i < 153; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector(".pbot").innerHTML = clutter;
};

function TimerFunc() {
    var Time = setInterval(function () {
        if (Timer > 0) {
            Timer--;
            document.querySelector("#Time").innerHTML = Timer;
        } else {
            clearInterval(Time);
            document.querySelector(".pbot").innerHTML = `<h1>GAME OVER</h1>`
        }
    }, 1000);
};

function incScore() {
    score += 10
    document.querySelector("#score").textContent = score
};

function Hitler() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#Hit").innerHTML = hitrn;
};

document.querySelector(".pbot").addEventListener("click", function (dets) {
    let clickednum = Number(dets.target.textContent)
    if (clickednum === hitrn) {
        bubbleMaker();
        Hitler();
        incScore();
    };
}
);

TimerFunc();
bubbleMaker();
Hitler();