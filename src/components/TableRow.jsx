import React from "react";
import TableCell from "./TableCell";

//manipulate inner array to return correct amount of rows
function TableRow(props) {
  return (
    <tr>
      {props.grid[0].map((cell) => {
        return (<TableCell grid={props.grid} currentColor={props.currentColor}/>)
      })}
    </tr>
  );
}

export default TableRow;
