// var hoursSpan = document.getElementById("hour");
// var minutesSpan = document.getElementById("minutes");
// var secSpan = document.getElementById("sec");

// var timer;

// function startInterval() {
//     timer = setInterval(function(){
//         var dateTimeNow = new Date();
    
//         var hours = dateTimeNow.getHours();
//         hoursSpan.innerText = hours;
//         var minutes = dateTimeNow.getMinutes();
//         minutesSpan.innerText = minutes;
//         var seconds = dateTimeNow.getSeconds();
//         secSpan.innerText = seconds;
//     }, 1000);
// }



// function stopSetIntervalFunction() {
//     clearInterval(timer);
// }

// function startSetIntervalFunction() {
//     startInterval();
// }

function Clock () {
    this.hoursSpan = document.getElementById("hour");
    this.minutesSpan = document.getElementById("minutes");
    this.secSpan = document.getElementById("sec");
    this.timer;

    this.setDateTime = function() {
        var date = new Date();
        this.hoursSpan.innerText = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        this.minutesSpan.innerText = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        this.secSpan.innerText = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    }

    this.startTime = function() {
        if(!this.timer) {
            this.timer = setInterval(this.setDateTime.bind(this), 1000);
        }
    }

    this.stopTime = function() {
        clearInterval(this.timer);
        this.timer = undefined;
    }

    this.setEventListeners = function() {
        document.getElementById("start").addEventListener("click", this.startTime.bind(this));
        document.getElementById("stop").addEventListener("click", this.stopTime.bind(this));
    }


}

var clock = new Clock();
clock.setEventListeners();





