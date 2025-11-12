import React from 'react'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

const App = () => {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Higher Order Component</h1>
      <ClickCounter />
      <HoverCounter />
    </div>
  )
}

export default App