//import logo from './logo.svg';
import './App.css';

import Game from './Game/Game.js';
import React from 'react';

function App() {
  return (
    <div>
      <Start />
    </div>
  );
}

function Start() 
{
  return(
    <div>
      <Game fieldSize={9}/>
    </div>
  );
}

export default App;
