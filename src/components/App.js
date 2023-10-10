


import React, { useState, useEffect } from 'react';
import Editor from './Editor'

function App() {
  
  

  

  return (
    <>
      <div className="pane top-pane">
        
        <Editor/>
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;
