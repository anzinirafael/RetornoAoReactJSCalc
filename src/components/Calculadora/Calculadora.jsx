//importação do componente botão
import Button from '../Button/Button'
//importação da folha de estilo em cascata
import './Calculadora.css'
//importação dos hooks de estado e efeito colatera
import { useEffect, useState } from 'react';
//Definição da função Calculadora por padrão
export default function Calculadora() {
    //Constante para definir regra de validação de operação e caracteres funcionais dentro da calculadora
    const regexValidate = /^([0-9]|-|\+|\*|\/|\.)*$/;
    //Estado para atualizar o display da calculadora e definir seus respectivos valores
    const [display, setDisplay] = useState("");
    //Estado para controlar teclas avançadas na calculadora
    const [showAdvance, isShowAdvance] = useState(false);
    //Estado responsável por armazenar e retornar o estado de erro quando uma operação inválida é digitada na calculadora
    const [error, setError] = useState();
    //Estado responsável por armazenar o historico das operações realizadas na calculadora
    const [history, setHistory] = useState([]);
    //Array responsável por definir os caracteres das teclas principais da calculadora
    const arrayValueKeyboard = [
        "7", "8", "9", "/", "C",
        "4", "5", "6", "*", "Del",
        "1", "2", "3", "-", "Ad",
        "0", ".", "+", "=",
    ]
    //Array responsável por definir os caracteres avançados da calculadora
    const arrayValueKeyboardAdvance = [
        "(", ")", "Hist"
    ]
    //Estado de efeito colateral em vazio por enquanto
    useEffect(() => {
    }, []);
    //Constante para definição e parametrização de função dos botões que serão chamados pela função map através do array de caracteres
    const calcKeyboard = (valueKeyButton, Key) => <Button key={Key} display={display} setDisplay={setDisplay}
     keyButton={valueKeyButton} setError={setError} isShowAdvance={isShowAdvance} showAdvance={showAdvance}
     history={history} setHistory={setHistory}/>
    //Retorno Javascript + xml JSX, itens renderizados no browser
    return (
        //Definição de uma div responsável por toda estrutura visual da calculadora, div father
        <div className="calculator">
            <input type="text" className="display" value={display} onChange={((event) => {
                setError()
                if (regexValidate.test(event.target.value)) {
                    setDisplay(event.target.value)
                }
            })}
                onKeyPress={event => {
                    if (event.key === "Enter") {
                        try {
                            setHistory([].concat(history, display))
                            setDisplay("" + eval(display))
                        }
                        catch (err) {
                            setError(`Ivalid expression: ${err.message}`)
                        }
                    } else if (event.kry === "C" || event.key === "c") {
                        setDisplay("")
                    }
                }} />
            {error && <span className='error'>{error}</span>}
            <div className="keyboard">
                {showAdvance && (arrayValueKeyboardAdvance.map(calcKeyboard))}
            </div>
            <div className="keyboard">
                {arrayValueKeyboard.map(calcKeyboard)}
            </div>
        </div>
    )
}