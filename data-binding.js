document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("textInput")
        .addEventListener("keyup", function (event) {
            document.getElementById("heading").innerHTML = event.target.value;
        });
});