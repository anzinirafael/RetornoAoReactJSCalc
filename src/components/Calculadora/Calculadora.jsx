import Button from '../Button/Button'
import './Calculadora.css'
import { useState } from 'react';

export default function Calculadora() {
    const [display, setDisplay] = useState("");
    const arrayValueButton = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."]
    const resolveComponentButton = arrayValueButton.map((valor, key) => <Button key={key} state={display} setState={setDisplay} valueButton={valor}/>)
    return (
        <div className="calculator">
            <div className="display">
                {display}
            </div>
            <div className="keyboard">
                {resolveComponentButton}
            </div>
        </div>
    )
}