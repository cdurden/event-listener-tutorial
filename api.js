function getWord(word) {
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
}
