import "./Button.css"
function Button(props)
{
    return <>
    <button>{props.icon} {props.text}</button>
    </>
}
export default Button