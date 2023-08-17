import { useState } from 'react'
import './App.css'
import Video10 from './example/video10/video10';


function App() {
  return (
    <div className="App">
      <p className="read-the-docs">
        <Video10 defaultAge={""} defaultName={""} />
      </p>
    </div>
  )
}

export default App
