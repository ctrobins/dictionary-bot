chrome.contextMenus.create({
    id: 'Style Wikipedia',
    title: 'Style Wikipedia',
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, { type: "styleWikipedia"});
    });
});

console.log('BACKGROUND SCRIPT!!!!');