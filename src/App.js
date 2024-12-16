import './App.css';
import './theColor.css'
import ColorBlock from './ColorBlock';
import AddColor from './AddColor';
import { useState } from 'react';

function App() {

  const [newColor, setColor] = useState('green')

  
  return (
    <div className="App">
      <header className="App-header">
        
        <ColorBlock 
          color={newColor}
        />
        <AddColor 
          // need to bring in the info here
          newColor={newColor}
          setColor={setColor}
        />
      </header>
    </div>
  );
}

export default App;
