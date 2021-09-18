console.log("Hei");
console.log(document);
var wordElements = document.querySelectorAll("span");
console.log(wordElements.length);
function createOutputTable(data) {
    const table = document.createElement("table");
    data.lemmas.forEach(function (lemma) {
        const tableRow = document.createElement("tr");
        const tableLemmaColumnItem = document.createElement("td");
        tableLemmaColumnItem.innerHTML = lemma.lemma;
        const tableTranslationColumnItem = document.createElement("td");
        tableTranslationColumnItem.innerHTML =
            lemma.translations.length > 0
                ? lemma.translations[0].translation
                : "";
        tableRow.appendChild(tableLemmaColumnItem);
        tableRow.appendChild(tableTranslationColumnItem);
        table.appendChild(tableRow);
    });
    return table;
}
wordElements.forEach(function (element) {
    element.addEventListener("click", function () {
        axios
            .get(
                `https://dev.aleksi.org/words/${element.innerHTML}?language=fi&languageTo=en`
            )
            .then(function (response) {
                const table = createOutputTable(response.data);
                document.querySelector("#output table").replaceWith(table);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    });
});
