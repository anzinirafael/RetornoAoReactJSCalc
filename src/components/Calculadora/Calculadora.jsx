import Button from '../Button/Button'
import './Calculadora.css'
import { useState } from 'react';

export default function Calculadora() {
const regexValidate = /^([0-9]|-|\+|\*|\/|\.)*$/;
    const [display, setDisplay] = useState("");
    const arrayValueKeyboard = [
        "7", "8", "9", "/", "C",
         "4", "5", "6", "*", "Del",
          "1", "2", "3", "-", "",
           "0", ".", "+", "=",
        ]
    const calcKeyboard = arrayValueKeyboard.map((valueKeyButton, primaryKey) => <Button key={primaryKey} display={display} setDisplay={setDisplay} keyButton={valueKeyButton}/>)
    return (
        <div className="calculator">
            <input type="text" className="display" value={display} onChange={((event) =>{
                if(regexValidate.test(event.target.value)){
                    setDisplay(event.target.value)
                }
            })} />
            <div className="keyboard">
                {calcKeyboard}
            </div>
        </div>
    )
}