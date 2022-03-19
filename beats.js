var n = 0;

const urlBeatMap = new Map([
    [
        "http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/15-electronic%20snare.wav",
        "Snare",
    ],
    ["http://bigsamples.free.fr/d_kit/bdkick/909kik.wav", "Bass"],
    [
        "http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20WAV%20samples/Low%20Tom.wav",
        "Tom",
    ],
]);
function createBeatElmt(n, bpm, url) {
    const beatsContainer = document.getElementById("beats");
    const beatContainer = document.createElement("div");
    beatsContainer.appendChild(beatContainer);
    beatContainer.style =
        "border: 1px solid black; float: left; margin: 10px; padding: 10px;";
    const heading = document.createElement("h1");
    heading.innerHTML = `Beat ${n}`;
    beatContainer.appendChild(heading);
    const beatSettings = document.createElement("p");
    beatSettings.innerHTML = `Beat: ${urlBeatMap.get(url)}<br/>${bpm} bpm`;
    beatContainer.appendChild(beatSettings);
    const clearBeatButton = document.createElement("button");
    clearBeatButton.innerHTML = "Remove beat";
    beatContainer.appendChild(clearBeatButton);
    return [beatContainer, clearBeatButton];
}
function addBeat(bpm, url) {
    n += 1;
    var audioObj;
    audioObj = new Audio(url);
    const [beatContainer, clearBeatButton] = createBeatElmt(n, bpm, url);
    audioObj.addEventListener("canplaythrough", function (event) {
        /* the audio is now playable; play it if permissions allow */
        const beatInterval = setInterval(function () {
            audioObj.play();
        }, Math.floor(60000 / bpm));
        clearBeatButton.addEventListener("click", function () {
            clearInterval(beatInterval);
            beatContainer.remove();
        });
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const beatSelectorInput = document.getElementById("beatSelectorInput");
    urlBeatMap.forEach(function (beat, url) {
        const option = document.createElement("option");
        option.innerHTML = beat;
        option.value = url;
        beatSelectorInput.appendChild(option);
    });
    document
        .getElementById("addBeatButton")
        .addEventListener("click", function () {
            addBeat(
                document.getElementById("bpmInput").value,
                document.getElementById("beatSelectorInput").value
            );
        });
});
