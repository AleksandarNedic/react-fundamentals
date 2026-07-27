import { useState } from 'react';
import App from "../App";


function PasswordChecker() {
    const [password, setPassword] = useState("");
    return(
        <div>
            <h2>Enter password</h2>
            <input
                type={"password"}
                placeholder={"Enter your password"}
                onInput={(e) => setPassword(e.target.value)}

            ></input>
            <p>
                {
                    password.length < 8
                    ? 'Password must be at least 8 characters'
                    : 'Strong password'
                }
            </p>
        </div>

    )
}
;

export default PasswordChecker;