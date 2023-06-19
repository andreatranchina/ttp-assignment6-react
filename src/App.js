import "./App.css";
import React, { useState } from "react";
import Table from "./components/Table";

function App() {
  /*initialize grid state, grid state will maintain size of grid and colors
  of the individual cells*/
  const [grid, setGrid] = useState([
    ["red", "cell"],
    ["cell", "cell"],
  ]);
  //initialize currentColor and mouseDown state
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

  //when releasing mouse, set mouse down to up
  function handleMouseUp(){
    setMouseDown(false);
  }

  /*changeCellColor is passed down as a props all down the the TableCell component
  it will be called upon clicking down on the individual cell, as well as when
  click, holding and draging to select multiple cells to color
  the grid state is passed to its children as well, allowing to pass the specifc row
  and index of the selected TableCell component as parameters in the function*/
  function changeCellColor(row, index){
    let newGrid = [...grid];
    newGrid[row][index] = currentColor;
    setGrid(newGrid);
  }

  //handleClickClear all is called upon clicking the clear all button, it maintains
  //the size of the grid but sets all its element to empty strings, thus clearing the cell colors
  function handleClickClearAll(){
    let newGrid = [...grid];
    for (let i=0; i<grid.length; i++){
      for (let j=0; j<grid[0].length; j++){
        newGrid[i][j] = "";
      }
    }
    setGrid(newGrid);
  }

  //handleClickColorAll is called upon clicking the color all button, it sets all of
  //the elements in the array to the current selected color
  function handleClickColorAll(){
    let newGrid = [...grid];
    for (let i=0; i<grid.length; i++){
      for (let j=0; j<grid[0].length; j++){
        newGrid[i][j] = currentColor;
      }
    }
    setGrid(newGrid);
  }

  //handleClickColorUncolored is called upon clicking the color uncolored button, it sets all of
  //the elements in the array to the current selected color only if the element in a non-colored
  //cell 
  function handleClickColorUncolored(){
    let newGrid = [...grid];
    for (let i=0; i<grid.length; i++){
      for (let j=0; j<grid[0].length; j++){
        if (newGrid[i][j] === "" || newGrid[i][j] === "cell"){
          newGrid[i][j] = currentColor;
        }
      }
    }
    setGrid(newGrid);
  }

  //added event listener in order to register mouseup when releasing outside of window
  document.addEventListener("mouseup", () =>{
    setMouseDown(false);
  })
  
  return (
    <div className="App" onMouseUp={handleMouseUp}>
      <h1 className="nav">ColorPicker</h1>

      <button className="btn" onClick={handleClickAddRow}>Add Row</button>
      <button className="btn" onClick={handleClickAddColumn}>Add Column</button>
      <button className="btn" onClick={handleClickRemoveRow}>Remove Row</button>
      <button className="btn" onClick={handleClickRemoveColumn}>Remove Column</button>
      <button className="btn" onClick={handleClickColorAll}>Color All</button>
      <button className="btn" onClick={handleClickColorUncolored}>Color Uncolored</button>
      <button className="btn" onClick={handleClickClearAll}>Clear All</button>

      <h2 className="instruction">Pick a color and click a cell!</h2>
      <h4 className="mini-instruction">or click and drag cursor to color multiple </h4>

      <select className="btn"onChange={handleChangeCurrentColor}>
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
        <Table grid={grid} currentColor={currentColor} mouseDown={mouseDown} changeCellColor={changeCellColor}/>
      </div>
    </div>
  );
}

export default App;
