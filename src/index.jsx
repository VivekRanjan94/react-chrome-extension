import React from 'react'
import { render } from 'react-dom'
import './Scss/styles.scss'

import App from './App.jsx'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
)
