import './Button.css'


export default function Button({ display, setDisplay, keyButton }) {
    const selector = keyButton === "0" ? "span2" : '' || isNaN(keyButton) ? "primary" : "";
    return (<button onClick={() => {
        if (keyButton === "=") { setDisplay(eval(display)) }
        else { setDisplay(display + keyButton) }
    }}
        className={selector}> {keyButton}</button>)
}



/*
"." ? "primary" : "" ||
    valueButton === "+" ? "primary" : "" || valueButton === "-" ? "primary" : "" ||
    valueButton == "*" ? "primary" : "" || valueButton === "/" ? "primary" : "
*/