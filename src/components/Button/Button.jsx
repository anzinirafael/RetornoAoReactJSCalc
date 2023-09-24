import './Button.css'


export default function Button(props){

    return(
        <button onClick={() => props.setState(props.state + props.valueButton)} className={props.valueButton === "0" ? "span2" : '' || props.valueButton === "." ? "primary" : ''}>{props.valueButton}</button>
    )
}