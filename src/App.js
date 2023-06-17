import './App.css';
import React, {useState} from 'react';
import Table from './components/Table';

function App() {
  //initialize currentColor state and grid state
  const [grid, setGrid] = useState([['cell','cell'], ['cell','cell']]);
  const [currentColor, setCurrentColor] = useState("");

  return (
    <div className="App">
      <h1>ColorPicker</h1>

      <button>Add Row</button>
      <button>Add Column</button>
      <button>Remove Row</button>
      <button>Remove Column</button>
      <button>Color All</button>
      <button>Clear All</button>

      <h2>Pick a color and change the color of a cell!</h2>

      <select>
        <option value="choose" selected disabled>Choose a color</option>
        <option>Red</option>
        <option>Yellow</option>
        <option>Green</option>
        <option>Blue</option>
        <option>Purple</option>
        <option>Orange</option>
      </select>
      <Table grid={grid} currentColor={currentColor} />
    </div>
  );
}

export default App;
