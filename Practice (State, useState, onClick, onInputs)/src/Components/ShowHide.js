import { useState } from 'react'
import App from "../App";

function ShowHide() {

    const [showText, setShowText] = useState(true);


    return (
        <div>

            <button onClick={() => setShowText(!showText)}>
                {showText ? 'Hide' : 'Show'}
            </button>
            {showText ? <p>Hello World!</p> : null }
        </div>
    )
}

export default ShowHide;