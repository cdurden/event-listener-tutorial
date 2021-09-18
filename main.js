console.log("Hei");
console.log(document);
var wordElements = document.querySelectorAll("span");
console.log(wordElements.length);
wordElements.forEach(function (element) {
    element.addEventListener("click", function () {
        axios
            .get(
                `https://dev.aleksi.org/words/${element.innerHTML}?language=fi&languageTo=en`
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    });
});
