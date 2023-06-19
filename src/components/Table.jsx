import React from 'react'
import TableRow from './TableRow'

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