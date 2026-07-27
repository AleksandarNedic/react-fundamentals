import { useState } from 'react'


function CharacterCounter() {

    const [text, setText] = useState('')
    return (

       <div>
           <input type={'text'} placeholder={'Enter Your Text'}
           onChange={e => setText(e.target.value)}
           ></input>
           <p>
               Charachets: {text.length}
           </p>

       </div>

    );


}


export default CharacterCounter