const startButton = document.getElementById("startAnalysis");

startButton.addEventListener("click", () => {
    chrome.tabs.create({
        url: chrome.runtime.getURL("board.html")
    });
});
