import Button from '../Button/Button'
import './Calculadora.css'
import { useState } from 'react';

export default function Calculadora() {
const regexValidate = /^([0-9]|-|\+|\*|\/|\.)*$/;
    const [display, setDisplay] = useState("");
    const [error, setError] = useState();
    const arrayValueKeyboard = [
        "7", "8", "9", "/", "C",
         "4", "5", "6", "*", "Del",
          "1", "2", "3", "-", "",
           "0", ".", "+", "=",
        ]
    const calcKeyboard = arrayValueKeyboard.map((valueKeyButton, Key) => <Button key={Key} display={display} setDisplay={setDisplay} keyButton={valueKeyButton} setError={setError}/>)
    return (
        <div className="calculator">
            <input type="text" className="display" value={display} onChange={((event) =>{
                if(regexValidate.test(event.target.value)){
                    setDisplay(event.target.value)
                }})}
                onKeyPress={event => {
                   if(event.key === "Enter"){
                    try{
                    setDisplay("" + eval(display))
                    }
                    catch(err){
                        setError(`Ivalid expression: ${err.message}`)
                    }
                   }else if(event.kry === "C" || event.key === "c"){
                    setDisplay("")
                   } 
                } } />
            <span className='error'>{error}</span>
            <div className="keyboard">
                {calcKeyboard}
            </div>
        </div>
    )
}