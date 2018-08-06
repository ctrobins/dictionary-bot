chrome.runtime.onMessage.addListener(request => {
    if (request.type === 'styleWikipedia') {
        document.body.style.backgroundColor = 'green';
    
        const paragraphs = document.getElementsByTagName('p');
    
        for (let el of paragraphs) {
            el.style.fontFamily = 'comic sans ms';
        }
    }
});

console.log('CONTENT SCRIPT!!!!!');