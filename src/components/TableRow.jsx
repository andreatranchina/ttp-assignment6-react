import React from "react";
import TableCell from "./TableCell";

//manipulate inner array of grid (row passed as props) to return the correct number of cells in each row
function TableRow(props) {
  return (
    <tr>
      {props.row.map((cell, index) => {
        return (<TableCell grid={props.grid} currentColor={props.currentColor} mouseDown={props.mouseDown}
          cellColor= {cell} rowNumber = {props.rowNumber} columnNumber = {index}
          changeCellColor={props.changeCellColor}
        />)
      })}
    </tr>
  );
}

export default TableRow;
