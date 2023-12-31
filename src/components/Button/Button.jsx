import './Button.css'


export default function Button({ display, setDisplay, keyButton, setError, isShowAdvance, showAdvance, setHistory, history }) {
    const selector = keyButton === "0" ? "span2" : '' || isNaN(keyButton) ? "primary" : ""
    /*
    "." ? "primary" : "" ||
        valueButton === "+" ? "primary" : "" || valueButton === "-" ? "primary" : "" ||
        valueButton == "*" ? "primary" : "" || valueButton === "/" ? "primary" : "
    */
    return (<button onClick={() => {
        setError( )
        switch(keyButton){
            case '=':
                try{
                    setHistory([].concat(history, display))
                    setDisplay("" + eval(display))
                    break
                }
                catch(err){
                    setError(`Invalid expression: ${err.message}`)
                }
            case 'Del':
                setDisplay(display.substring(0, display.length -1))
                break
            case 'C':
                setDisplay("")
                break
            case 'Ad':
                isShowAdvance(!showAdvance);
                break
            case 'Hist':
                setDisplay(history)
                console.log(history)
                break
            default:
                setDisplay(display + keyButton)
                break    
        }
/*
        if (keyButton === "=") { setDisplay(eval(display)) }
        else if(keyButton === "Del"){setDisplay("")}
        else { setDisplay(display + keyButton) }-
*/
    }}
        className={selector}> {keyButton}</button>)
}



