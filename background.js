function onBeforeRequest(data) {
    console.error('top of onBeforeRequest')
    // figure out how and what to block here
}

chrome.webRequest.onBeforeRequest.addListener(onBeforeRequest);