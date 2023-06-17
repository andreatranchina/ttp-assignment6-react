import React from 'react'
import TableRow from './TableRow'

function Table(props) {
  return (
    <table style={{marginLeft:"auto", marginRight:"auto"}}>
      <tbody>
        {props.grid.map((row) => {
          return (
            <TableRow grid={props.grid} currentColor={props.currentColor}/>
            
          )
        })}
      </tbody>
    </table>
  )
}

export default Table