var nTimers = 0;
var secondsRemaining = 60;
function createTimerElmt(n) {
    const timersContainer = document.getElementById("timers");
    const timerContainer = document.createElement("div");
    timersContainer.appendChild(timerContainer);
    timerContainer.style =
        "border: 1px solid black; float: left; margin: 10px; padding: 10px;";
    const heading = document.createElement("h1");
    heading.innerHTML = `Timer ${n}`;
    timerContainer.appendChild(heading);
    const timeRemainingElmt = document.createElement("span");
    timerContainer.appendChild(timeRemainingElmt);
    const timerMessage = document.createElement("p");
    timerContainer.appendChild(timerMessage);
    return [timeRemainingElmt, timerMessage];
}
function addTimer() {
    nTimers += 1;
    const [timeRemainingElmt, timerMessage] = createTimerElmt(nTimers);
    /*
    timeRemainingElmt.innerHTML = secondsRemaining;
    const timerInterval = setInterval(function () {
        secondsRemaining -= 1;
        if (secondsRemaining <= 0) {
            clearInterval(timerInterval);
            timerMessage.innerHTML = `Timer expired at ${new Date()}`;
        }
        timeRemainingElmt.innerHTML = secondsRemaining;
    }, 1000);
    */
}
document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("addTimerButton")
        .addEventListener("click", function () {
            secondsRemaining =
                document.getElementById("timerMinutesInput").value * 60;
            addTimer();
        });
});
