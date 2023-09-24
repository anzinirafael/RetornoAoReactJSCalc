import './Button.css'


export default function Button({ display, setDisplay, keyButton }) {
    const selector = keyButton === "0" ? "span2" : '' || isNaN(keyButton) ? "primary" : "";
    return (<button onClick={() => {
        switch(keyButton){
            case '=':
                setDisplay(eval(display))
                break
            case 'Del':
                setDisplay(display.substring(0, display.length -1))
                break
            case 'C':
                setDisplay("")
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



/*
"." ? "primary" : "" ||
    valueButton === "+" ? "primary" : "" || valueButton === "-" ? "primary" : "" ||
    valueButton == "*" ? "primary" : "" || valueButton === "/" ? "primary" : "
*/