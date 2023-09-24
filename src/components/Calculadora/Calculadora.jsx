import Button from '../Button/Button'
import './Calculadora.css'
import { useState } from 'react';

export default function Calculadora() {
    const [display, setDisplay] = useState("");
    const arrayValueKeyboard = [
        "7", "8", "9", "/", "",
         "4", "5", "6", "*", "",
          "1", "2", "3", "-", "",
           "0", ".", "+", "=",
        ]
    const calcKeyboard = arrayValueKeyboard.map((valueKeyButton, primaryKey) => <Button key={primaryKey} display={display} setDisplay={setDisplay} keyButton={valueKeyButton}/>)
    return (
        <div className="calculator">
            <div className="display">
                {display}
            </div>
            <div className="keyboard">
                {calcKeyboard}
            </div>
        </div>
    )
}