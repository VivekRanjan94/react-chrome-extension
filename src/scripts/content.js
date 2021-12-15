console.log('extension go')

chrome.runtime.onMessage.addListener((msg) => {
  console.log(msg)
  if (msg.sender === 'popup') {
    chrome.runtime.sendMessage({ sender: 'content', url: window.location.href })
  }
})
