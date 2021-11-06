console.log("Hei");
console.log(document);
var wordElements = document.querySelectorAll("span");
console.log(wordElements.length);
function addEventListeners(modCode) {
    var mod = false;
    function noop(e) {}
    document.addEventListener("click", function (e) {
        if (mod) {
            console.log("Mod active");
            e.preventDefault();
        } else {
            console.log("Mod inactive");
        }
    });
    document.addEventListener("keydown", function (e) {
        if (e.code === modCode) {
            mod = true;
        }
    });
    document.addEventListener("keyup", function (e) {
        if (e.code === modCode) {
            mod = false;
        }
    });
}
addEventListeners("ControlLeft");
