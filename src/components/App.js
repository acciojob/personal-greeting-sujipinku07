
import { useState } from 'react';

import React from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');

    const onGreet = (e) => {
        setName(e.target.value);
    };
  return (
    <div>
        {/* Do not remove the main div */}
      <div>
            <label htmlFor="greet">Enter your name:</label><br />
              <input
                    type="text"
                    id="greet"
                    name="name"
                    onChange={onGreet}
                    value={name}
                />
            </div>
            <p>{name.length>0 ? `Hello ${name}!`:""} </p>    
    </div>
  )
}
export default App