import React from 'react'

function Focus() {
    const inputFocus = ()=>{
  const fid = document.getElementById('ftext');
  fid.style.background="red"
    }
  return (
    <div>
      <h2>Focus Page</h2>
      <input id='ftext' type="text" onFocus={inputFocus} />
    </div>
  )
}

export default Focus
