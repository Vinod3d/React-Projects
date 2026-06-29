import React, { useState } from 'react'
import PopupContent from './PopupContent';

const CopyInput = () => {
    const [value, setValue] = useState("");
    const [copiedValue, setCopiedValue] = useState(false);

    const handleInputChange = (event) => {
        setValue(event.target.value);
    }
    const handleCopy = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(value).then(()=>{
            setCopiedValue(true);
            setTimeout(()=>{
                setCopiedValue(false);
            }, 3000);
        });
    }
  return (
    <div>
        <form onSubmit={handleInputChange}>
            <input type="text" value={value} onChange={handleInputChange} />
            <button type="submit" onClick={handleCopy}>Copy</button>
        <PopupContent copied={copiedValue} />
        </form>

        <p>You typed: {value}</p>
    </div>
  )
}

export default CopyInput