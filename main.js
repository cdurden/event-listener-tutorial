console.log("Hei");
console.log(document);
var wordElements = document.querySelectorAll("span");
console.log(wordElements.length);
wordElements.forEach(function (element) {
    console.log(element.innerHTML);
});
