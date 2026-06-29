import {createPortal} from 'react-dom'

const PopupContent = ({copied}) => {
    return createPortal(
        <section>
            {copied && <div style={{position: "absolute", bottom: "5px", left: "5px", color: "green", border: "1px solid black", padding: "10px"}}>Copied to clipboard!</div>}
        </section>,
        document.getElementById("portal")
    )
}

export default PopupContent