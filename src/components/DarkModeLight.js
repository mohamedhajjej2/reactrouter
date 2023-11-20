import React, { useEffect, useState } from 'react'

function DarkModeLight() {
   const [theme,settheme]=useState(false);
   const handleClick=()=>{
    settheme(!theme)

   }
   useEffect(()=>{
    if(theme==true){
        document.body.classList.add("dark")

    }
    else{
        document.body.classList.remove("dark")
    }
   })
  return (
    <div className='buttondark'>
<button onClick={handleClick}><img className='svgmoon' src='https://www.svgrepo.com/show/476627/moon.svg'></img></button>

    </div>
  )
}

export default DarkModeLight