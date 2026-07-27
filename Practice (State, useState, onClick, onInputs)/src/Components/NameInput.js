import { useState } from 'react';



function NameInput() {
    const [name, setName] = useState("");
    return(
        <div>
            <h2>Enter Your Name!</h2>
            <input onInput={(e => {
                setName(e.target.value)
            })} type={"text"} placeholder={"Enter your Name"}></input>
            <p>Your name is: {name}</p>
        </div>
    )


}


export default NameInput;
