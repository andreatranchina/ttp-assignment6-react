import React from 'react'
import TableRow from './TableRow'

//use the grid state passed as props in order to return the correct amount of rows
//as well as store the row and the row number as props for its children
function Table(props) {
  return (
    <table style={{marginLeft:"auto", marginRight:"auto"}}>
      <tbody>
        {props.grid.map((row, index) => {
          return (
            <TableRow grid={props.grid} currentColor={props.currentColor} mouseDown={props.mouseDown}
              row = {row} rowNumber ={index} changeCellColor={props.changeCellColor}
            />
            
          )
        })}
      </tbody>
    </table>
  )
}

export default Table