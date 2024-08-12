import React from 'react'
import ReactDOM from 'react-dom/client'
import Base from './new.jsx'
import './index.css'
import Login from './Login.jsx'

let root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)

