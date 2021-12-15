import React, { useEffect, useState } from 'react'

const App = () => {
  const [tabUrl, setTabUrl] = useState('')

  const getUrl = () => {
    console.log('sending message')

    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      const activeTab = tabs[0]
      console.log(activeTab)
      chrome.tabs.sendMessage(activeTab.id, {
        sender: 'popup',
        message: 'test',
      })
    })
  }

  useEffect(() => {
    chrome.runtime.onMessage.addListener((msg) => {
      setTabUrl(msg.url)
    })
  }, [])

  return (
    <div>
      <button
        onClick={() => {
          getUrl()
        }}
      >
        Get URL
      </button>
      <p>URL: {tabUrl}</p>
    </div>
  )
}

export default App
