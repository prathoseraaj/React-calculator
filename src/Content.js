import React, { useState } from 'react';

const Content = () => {

    //State the input
    let [input,setInput] = useState("");

    
  return (
    <main>
    <div className='container'>
        <div id='textbox'></div>
        <div className='column'>
        <div ><button id='botton7' className='button' >7</button></div>  
        <div ><button id='botton8' className='button' >8</button></div>        
        <div><button id='botton9' className='button' >9</button></div>        
        <div><button id='botton/' className='button' >/</button></div>        
        </div>

        <div className='column'>
        <div><button id='botton4'>4</button></div>  
        <div><button id='botton5'>5</button></div>        
        <div><button id='botton6'>6</button></div>        
        <div><button id='botton*'>*</button></div>        
        </div>

        <div className='column'>
        <div><button id='botton1'>1</button></div>  
        <div><button id='botton2'>2</button></div>        
        <div><button id='botton3'>3</button></div>        
        <div><button id='botton-'>-</button></div>        
        </div>

        <div className='column'>
        <div><button>0</button></div>  
        <div><button>.</button></div>        
        <div><button>+</button></div>        
        <div ><button id='equalto'>=</button></div>        
        </div>
    </div>
    </main>
  )
}

export default Content