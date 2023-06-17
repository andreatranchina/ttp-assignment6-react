import "./App.css";
import React, { useState } from "react";
import Table from "./components/Table";

function App() {
  //initialize currentColor state and grid state
  const [grid, setGrid] = useState([
    ["cell", "cell"],
    ["cell", "cell"],
  ]);
  const [currentColor, setCurrentColor] = useState("");
  const [mouseDown, setMouseDown] = useState(false);

  //function handleClickAddRow will be called upon clicking addRow button, will add a row to the grid
  function handleClickAddRow() {
    let numRows = grid.length;
    let numCols = grid[0].length;
    //if grid is empty, set grid to include one single cell (one row by one column)
    if (numRows===0 || numCols ===0){
      setGrid([["cell"]]);
    }
    //else create a new row that has as many cells as the number of columns
    else {
      let newRow = [];
      let newGrid = [[]];
      for (let i = 0; i < grid[0].length; i++) {
        newRow.push("cell");
      }
  
      newGrid = [...grid, newRow];
      setGrid(newGrid);
    }

  }

  //function handleClickAddColumn will be called upon clicking addRow button, will add a column to the grid
  function handleClickAddColumn() {
    let numRows = grid.length;
    let numCols = grid[0].length;

    //if grid is empty, set grid to include one single cell (one row by one column)    
    if (numRows === 0 || numCols ===0){
      // let newRow = [];
      // let newGrid = [[]];
      // newRow.push("cell");
      // newGrid.push(newRow);
      // setGrid(newGrid);      
      setGrid([["cell"]]);
    }

    //else iterate through each row and add a cell in order to complete the new column
    else{
      let newGrid = [...grid];
      for (let i = 0; i < numRows; i++) {
        newGrid[i].push("cell");
      } 
      setGrid(newGrid);
    }
  }

  //handleClickRemoveRow() will be called upon clicking the remove row button, will remove a row from the grid
  function handleClickRemoveRow() {
    let numRows = grid.length;
    //if there is only one row in the grid, set the grid to an empty grid
    if (numRows ===1){
      setGrid([[]]);
    }
    //else remove the last element(row) from the grid
    else if (numRows !== 0){
      let newGrid = [...grid];
      newGrid.splice(-1, 1);
      setGrid(newGrid);
    }

  }

  //handleClickRemoveColumn() will be called upon clicking the remove column button, will remove a column from the grid  
  function handleClickRemoveColumn(){
    let numCols = grid[0].length;

    //if there is only one column in the grid, set the grid to an empty grid    
    if (numCols ===1){
      setGrid([[]]);
    }

    //else iterate through each row of the grid and remove the last "cell" element in order to remove the entire column
    else if (numCols !==0){
      let numRows = grid.length;
      let newGrid = [...grid];
      for (let i=0; i<numRows; i++){
        newGrid[i].splice(-1, 1);
      }
      setGrid(newGrid);
    }
  }

  //called upon change in the select option, will update the state of the current color 
  //and the current color state will be passed as a props to TableCell 
  function handleChangeCurrentColor(event){
    setCurrentColor(event.target.value);
  }

  //when pressing mouse down on the grid, set mouse down to true
  function handleMouseDown(){
    setMouseDown(true);
  }

  //when releasing mouse on the web page, set mouse down to up
  function handleMouseUp(){
    setMouseDown(false);
  }

  return (
    <div className="App" onMouseUp={handleMouseUp}>
      <h1>ColorPicker</h1>

      <button onClick={handleClickAddRow}>Add Row</button>
      <button onClick={handleClickAddColumn}>Add Column</button>
      <button onClick={handleClickRemoveRow}>Remove Row</button>
      <button onClick={handleClickRemoveColumn}>Remove Column</button>
      <button>Color All</button>
      <button>Clear All</button>

      <h2>Pick a color and change the color of a cell!</h2>

      <select onChange={handleChangeCurrentColor}>
        <option value="choose" selected disabled>
          Choose a color
        </option>
        <option>Red</option>
        <option>Yellow</option>
        <option>Green</option>
        <option>Blue</option>
        <option>Purple</option>
        <option>Orange</option>
      </select>
      <div onMouseDown={handleMouseDown}>
        <Table grid={grid} currentColor={currentColor} mouseDown={mouseDown}/>
      </div>
    </div>
  );
}

export default App;
