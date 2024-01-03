import React from 'react'

function Input() {
    const chaget = ()=>{
  const seid = document.getElementById('select').value;
  const seids = document.getElementById('seshow'); 
   seids.textContent=seid;
   seids.style.color="red"
 


    }
    const date = ()=>{
        const seid = document.getElementById('dts').value;
        const dsa = document.getElementById('da');
        dsa.textContent=seid;
        dsa.style.color="red"
       }  
       const texta = ()=>{
        const seid = document.getElementById('texta').value;
        const dsa = document.getElementById('textad');
        dsa.textContent=seid;
        dsa.style.color="red"
       }  
       const radio = ()=>{
        const seid = document.getElementById('ra').value; 
        const dsa = document.getElementById('grn');
        dsa.textContent=seid; 
        dsa.style.color="red"
       }  
       const radios = ()=>{
        const seid = document.getElementById('ras').value; 
        const dsa = document.getElementById('grn');
        dsa.textContent=seid; 
        dsa.style.color="red"
       }  
       const checkbox = ()=>{
        const seid = document.getElementById('checkbox'); 
        const dsa = document.getElementById('cha');
        dsa.textContent="Thank You For Agree "; 
        dsa.style.color="red"
       }  
          

  return (
    <div  className='container'>

      <p id='seshow'></p>
      <select name="seleced" id="select"  onChange={chaget}  className='form-control'>
        <option value="">Select</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JAVA">JAVA</option>
        <option value="REACT">REACT</option>
      </select> <br />
      <p id='da'></p>
      <input type="date" className='form-control' id='dts' onChange={date} />
      <br />
      <p id='textad'></p>
      <textarea name="text" id="texta" className='form-control' onChange={texta} ></textarea>
      <br />
      <p id='grn'></p>
      <input type="radio" value="Male" id='ra' name='gender' onChange={radio}  />
      <label htmlFor="gender">Male</label>

      <input type="radio" value="Female" id='ras' name='gender' onChange={radios}   />
      <label htmlFor="gender">FeMale</label>
      <br />
      <p id='cha'></p>
      <input type="checkbox" name='checkbox' id='checkbox' onChange={checkbox} />
      <label htmlFor="checkbox">Plese Check Hear</label>
      
    </div>
  )
}

export default Input
