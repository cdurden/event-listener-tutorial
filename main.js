console.log("Hei");

var wordElements = document.querySelectorAll("span");

document.addEventListener("click", function (e) {
    if (document.getElementById("alt-click").checked) {
        console.log("Default link behavior disabled");
        if (e.target.id !== "alt-click") {
            e.preventDefault();
        }
    } else {
        console.log("Links enabled");
    }
});

/*
const mod = false;
const modCode = "ControlLeft";
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
*/
