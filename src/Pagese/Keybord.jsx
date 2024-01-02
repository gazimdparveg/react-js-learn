import React from 'react'

function Keybord() {
 const keydow = (a)=>{
 const  myi = document.getElementById('keyf').value;
 const  myids = document.getElementById('keyp');
 myids.textContent = myi;
  }
 const keyup = ()=>{ 
    const  myids = document.getElementById('keyp');
    myids.textContent=" now your are Writing";

 } 
 
  return (
    <div>
      <h1>Keybord Down Function</h1>
      <p id='keyp'></p>
      <input type="text" id='keyf' onKeyDown={keydow} onKeyUp={keyup} />
      <h3>Keybord Up Function</h3>
      <input type="text" id='keyup' onKeyUp={keyup} />
    </div>
  )
}

export default Keybord
