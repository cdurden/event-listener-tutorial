console.log("Hei");
console.log(document);
var wordElements = document.querySelectorAll("span");
console.log(wordElements.length);
wordElements.forEach(function (element) {
    element.addEventListener("click", function () {
        console.log(element.innerHTML);
    });
});
