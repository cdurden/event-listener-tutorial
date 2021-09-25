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
        getWord(element.innerHTML);
    });
});
