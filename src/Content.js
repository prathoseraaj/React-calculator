import React, { useState } from 'react';

const Content = () => {

    let [input,setInput] = useState("");

    let handlebutton = (value) => {
        setInput(input + value) ;
    }


    let handleResult = () => {

        try{
            console.log(input);
        let result = eval(input);
        setInput (result);
        }

        catch(error){
            setInput("error");
        }
    }

    let handleClearresult = () => {
        try{
            setInput ("") ;
        }

        catch(error){
            setInput("Error")

        }
    }

    
  return (
    <main>
    <div className='container'>
        <div id="textbox_c">
        <div id='textbox'>{input}</div>
        <div ><button id='botton7' className='button' onClick={() => handleClearresult("C")}>C</button></div>  

        
        </div>
        <div className='column'>
        <div ><button id='botton7' className='button' onClick={() => handlebutton("7")}>7</button></div>  
        <div ><button id='botton8' className='button'  onClick={() => handlebutton("8")} >8</button></div>        
        <div><button id='botton9' className='button'  onClick={() => handlebutton("9")}>9</button></div>        
        <div><button id='botton/' className='button'  onClick={() => handlebutton("/")}>/</button></div>        
        </div>

        <div className='column'>
        <div><button id='botton4' className='button' onClick={() => handlebutton("4")}>4</button></div>  
        <div><button id='botton5'  className='button' onClick={() => handlebutton("5")}>5</button></div>        
        <div><button id='botton6' className='button' onClick={() => handlebutton("6")}>6</button></div>        
        <div><button id='botton*' className='button' onClick={() => handlebutton("*")}>*</button></div>        
        </div>

        <div className='column'>
        <div><button id='botton1' className='button' onClick={() => handlebutton("1")}>1</button></div>  
        <div><button id='botton2'  className='button' onClick={() => handlebutton("2")}>2</button></div>        
        <div><button id='botton3'  className='button' onClick={() => handlebutton("3")}>3</button></div>        
        <div><button id='botton-'  className='button' onClick={() => handlebutton("-")}>-</button></div>        
        </div>

        <div className='column'>
        <div><button id='botton1' className='button' onClick={() => handlebutton("0")}>0</button></div>  
        <div><button id='botton1' className='button' onClick={() => handlebutton(".")}>.</button></div>        
        <div><button id='botton1' className='button' onClick={() => handlebutton("+")}>+</button></div>        
        <div ><button id='equalto' className='button' onClick={handleResult}>=</button></div>        
        </div>
    </div>
    </main>
  )
}

export default Content