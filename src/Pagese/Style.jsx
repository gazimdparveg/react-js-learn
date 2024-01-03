import React from 'react'
import './Style.css';
import mystyle from './My.module.css'

function Style() {
    const style2 = {
        color:"red",
        textAlign:"right",
        fontSize:40,
        background:"green"
        
    }
  return (
    <div>
      <h1 style={{color:"red",fontSize:30,textAlign:"center" }}>Inline css </h1>
      <h2 style={style2}>Inline css rul 2</h2>
      <h3 className='newclass'>React JS External Css Style</h3>
      <h3 className={mystyle.newclass}>Module css in react js</h3>
      
    </div>
  )
}

export default Style
