import React from "react";
import TableCell from "./TableCell";

//manipulate inner array to return correct amount of rows
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
