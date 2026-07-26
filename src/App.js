import React from 'react';
import User from './Components/User';
import Products from './Components/Products';




function App() {
  return (
      <>
        <User
            name="Aleksandar"
            age={23}
            city="Bijeljina"
        />
        <Products />
      </>
  )

}

export default App;