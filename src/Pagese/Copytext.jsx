import React from "react";

function copytext(){
    const copyt = ()=>{
        alert("Copyed Text");
    }
    return(
        <>
        <p onCopy={copyt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iusto!</p>
        </>
    )
}
export default copytext;