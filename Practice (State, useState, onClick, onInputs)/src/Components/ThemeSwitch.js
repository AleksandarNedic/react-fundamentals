import { useState }  from 'react';



function ThemeSwitch() {
    const [lightTheme, setLightTheme] = useState(true)
    return (
        <div
        style={{
            backgroundColor: lightTheme ? 'white' : 'black',
            color: lightTheme ? 'black' : 'white',
            minHeight: '100vh',
        }}>
            <h2>
                {lightTheme ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </h2>

            <button
            onClick={() => {
                setLightTheme(!lightTheme);
            }}>Change Theme
            </button>

        </div>
    )
}


export default ThemeSwitch;